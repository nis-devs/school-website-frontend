import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const Footer = () => (
  <footer className="w-full border-t-[1px] border-t-gray-500 p-4 space-y-4">
    {/* Social Links */}
    <div className="flex items-center justify-center gap-3">
      <a
        className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
        href="https://www.facebook.com/fmalm.nis.edu.kz"
      >
        <IconBrandFacebook className="w-5 h-5" />
      </a>
      <a
        className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
        href="https://www.instagram.com/nis_pm_almaty/"
      >
        <IconBrandInstagram className="w-5 h-5" />
      </a>
      <a
        className="duration-300 rounded-full p-3 hover:bg-gray-200 hover:dark:bg-gray-700"
        href="https://www.youtube.com/@nis_pm_almaty"
      >
        <IconBrandYoutube className="w-5 h-5" />
      </a>
    </div>

    {/* Copyright */}
    <p className="text-center">
      © Dastan Ozgeldi {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
);
