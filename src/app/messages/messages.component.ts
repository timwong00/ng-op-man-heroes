import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";

@Component({
  selector: "messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  //public because we're binding it to the template
  constructor(public messageService: MessageService) {}

  ngOnInit() {}
}
