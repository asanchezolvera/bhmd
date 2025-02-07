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

@Component({
  selector: "app-main-footer",
  imports: [CommonModule, RouterLink, NgIcon],
  providers: [
    provideIcons({
      simpleFacebook,
      simpleInstagram,
      simplePinterest,
      simpleYoutube,
      simpleX,
    }),
  ],
  templateUrl: "./main-footer.component.html",
  standalone: true,
})
export class FooterComponent implements OnInit {
  disclaimer: string =
    "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Use only as directed. Consult your healthcare provider before using supplements. The information provided herein is intended for your general knowledge only and is not intended to be, nor is it, medical advice or a substitute for medical advice. If you have or suspect you have, a specific medical condition or disease, please consult your healthcare provider.";

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
