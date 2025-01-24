import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { NgIcon, provideIcons } from "@ng-icons/core";
import {
  simpleFacebook,
  simpleInstagram,
  simplePinterest,
  simpleYoutube,
  simpleX,
} from "@ng-icons/simple-icons";
import { DisclaimerComponent } from "@src/app/features/disclaimer/disclaimer.component";

@Component({
  selector: "app-footer",
  imports: [CommonModule, RouterLink, NgIcon, DisclaimerComponent],
  providers: [
    provideIcons({
      simpleFacebook,
      simpleInstagram,
      simplePinterest,
      simpleYoutube,
      simpleX,
    }),
  ],
  templateUrl: "./footer.component.html",
  standalone: true,
})
export class FooterComponent implements OnInit {
  customerServicesLinks = [
    {
      name: "Order Status",
      href: "/order-status",
    },
    {
      name: "Start a Return",
      href: "/returns",
    },
    {
      name: "Luxe Loyalty Rewards",
      href: "/luxe-loyalty",
    },
    {
      name: "Help Center",
      href: "/help",
    },
    {
      name: "Email Us",
      href: "mailto:support@beverlyhillsmd.com",
    },
  ];
  legalLinks = [
    {
      name: "Disclaimer",
      href: "/legal/disclaimer",
    },
    {
      name: "Privacy Policy",
      href: "/legal/privacy-policy",
    },
    {
      name: "Terms of Use",
      href: "/legal/terms-of-use",
    },
    {
      name: "Cookies",
      href: "/legal/cookies",
    },
  ];
  ngOnInit(): void {}
}
