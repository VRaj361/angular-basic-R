import { ToastrService } from 'ngx-toastr';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId:string="";
  price:string="";
  books:Array<any>=[];
  constructor(private userService:UserService,private routeUrl:ActivatedRoute,private router:Router,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.bookId = this.routeUrl.snapshot.params['bookId'];
    this.userService.getAllBooks().subscribe(res=>{
        this.books=res
    })
    this.books.map((e)=>{
      if(e.Bookid === this.bookId){
        this.price = e.price;
      }
    })
  }
  editBook(){
    // let book={"bookId":this.bookId,"price":this.price};

    // const book={"bookId":parseInt(this.bookId),"author":null,"name":null,"category":null,"price":parseInt(this.price)};
    this.userService.updateParticularBook(this.bookId,this.price).subscribe(res=>{
      console.log(res);
      this.toaster.success("Update Successfully");
      this.router.navigateByUrl("/user/listuser");
    },err=>{
      console.log(err)
    })

  }
}
