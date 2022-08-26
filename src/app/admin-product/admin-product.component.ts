import { Component, OnInit } from '@angular/core';
 
interface menu {
  image : string,
  name : string
}

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor() { }

  menus : menu[] =[
    {
      image : '../../assets/img/pexels-mateusz-dach-362137.jpg',
      name : 'قهو ها'
    },
    {
      image : '../../assets/img/pexels-olena-bohovyk-1772124.jpg',
      name : 'دمنوش ها'
    },
    {
      image : '../../assets/img/pexels-valeria-boltneva-827516.jpg',
      name : 'کیک ها'
    },
    {
      image : '../../assets/img/pexels-alisha-mishra-1346341.jpg',
      name : ' بستنی ها'
    }
  ]

  ngOnInit(): void {
  }

}
