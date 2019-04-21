import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("canvas") canvasEl: ElementRef;
  private _CANVAS: any;
  private _CONTEXT: any;

  url = "assets/imgs/loc1.jpg";
  i = 0;
  dir1 = "Direction 1";
  dir2 = "Direction 2";
  dir3 = "Direction 3";
  dir4 = "Direction 4";
  dir5 = "Direction 5";
  dir6 = "Direction 6";
  lat = 10;
  long = 30;
  //205-400,225-400,245-390
  arr1 = [245,225,205,185, 160, 150, 130, 130, 135, 135, 135, 135, 135, 135, 135, 135, 135];
  arr2 = [390,400,400,425, 435, 443, 430, 420, 410, 395, 375, 355, 335, 315, 295, 275, 255];

  @ViewChild("map") mapElement: ElementRef;
  map: any;
  @ViewChild("directionsPanel") directionsPanel: ElementRef;
  loc = "map";
  places: Array<any>;

  constructor() {
    let a=setInterval(() => {
      console.log('I am called');
       this.i = this.i + 1;
       console.log(this.i);
       this.setupCanvas(this.i);
    }, 1000);
  }

  ngOnInit() {
    //this.getUserPosition();
    //this.loadMap();
    //this.startNavigating("Virar");
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 500;
    this._CANVAS.height = 500;

    this.initialiseCanvas();
    this.drawCircle(this.i);
    
  }
  myInput: String;
  onInput($event, to) {}

  ionViewDidLoad() {
    //this.getUserPosition();
    //this.loadMap();
    //this.startNavigating("Virar");
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 500;
    this._CANVAS.height = 500;

    this.initialiseCanvas();
    this.drawCircle(this.i);
  }
  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas(this.i);
    }
  }
  setupCanvas(i) {
    this._CONTEXT = this._CANVAS.getContext("2d");
    //this._CONTEXT.fillStyle = "#3e3e3e";
    //this._CONTEXT.fillRect(0, 0, 500, 500);
    var background = new Image();
    background.src = this.url;
    var ctx = this._CONTEXT;
    var ctx1 = this;
    background.onload = function() {
      ctx.drawImage(background, 0, 0);
      ctx1.drawCircle(i);
    };
  }
  drawCircle(i) {
    // this.clearCanvas();
    // this.setupCanvas();
    this._CONTEXT.fillStyle = "#3370d4"; //blue
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    // this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.height / 2, 80, 0, 2 * Math.PI);
    this._CONTEXT.arc(this.arr1[i], this.arr2[i], 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(245, 390, 5, 0, 2 * Math.PI);

    //this._CONTEXT.arc(130, 420, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 410, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 395, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 375, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 355, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 335, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 315, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 295, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 275, 5, 0, 2 * Math.PI);
    //this._CONTEXT.arc(135, 255, 5, 0, 2 * Math.PI);

    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = "#000000";
    this._CONTEXT.stroke();
    this._CONTEXT.fill();
    // this.lat = this.lat + 15;
    // this.long = this.long - 30;
  }

  navm = false;

  nav2() {
    this.setupCanvas(this.i);
  }
  nav() {
    setTimeout(this.setupCanvas, 5000);
  }

  startvoice() {}
}
