import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { postsDummy, postsProfileDummy } from '../../dummy/post';
import { IPost, IUser } from '../../models/response';
import { PostCardComponent } from './post-card/post-card.component';
import { PostService } from 'src/app/core/service/post.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [
    CommonModule,
    PostCardComponent,
  ],
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  @Input() user?: IUser

  private service = inject(PostService)
  private activate = inject(ActivatedRoute)

  list: IPost[] = []
  status: "initial" | "loading" = "loading"
  userId?: string
  take: number = 10
  skip: number = 0

  ngOnInit(): void {
    this.activate.params.subscribe((res) => {
      console.log(res);
      this.userId = res["id"]
      this.getList()

    })
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      
      if (this.userId != undefined) {
        let params: HttpParams = new HttpParams()
      .set("take", this.take)
      .append("skip", this.skip)
        .append("userId", this.userId)
        this.service.query(params).subscribe({
          next: (res) => {

            this.list.push(...res)
          },
          error: (err) => {
            console.log(err);
          }
        })
      } else {
        this.service.query(this.params).subscribe({
          next: (res) => {
            this.list.push(...res)
          },
          error: (err) => {
            console.log(err);
          }
        })
      }
      this.status = "initial"
    }, 500)
  }

  loadMore() {
    this.skip += this.take
    this.getList()
  }

  get params(): HttpParams {
    let p: HttpParams = new HttpParams()
      .set("take", this.take)
      .append("skip", this.skip)
    return p
  }

}
