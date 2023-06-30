"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Button } from "./ui/button";
import {
  IconBrandYoutube,
  IconCalendar,
  IconCode,
  IconCommand,
  IconDeviceLaptop,
  IconUser,
} from "@tabler/icons-react";
import React from "react";
import { Categories } from "@/types/menu";

type Groups = {
  name: string;
  actions: {
    title: string;
    icon: React.ReactNode;
    onSelect: () => void;
  }[];
}[];

const CommandMenu = ({ categories }: { categories: Categories }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const menu: Groups = categories.data.map((category: any) => {
    return {
      name: category.attributes.name,
      actions: category.attributes.pages.data.map((page: any) => {
        return {
          title: page.attributes.title,
          onSelect: () =>
            runCommand(() =>
              window.open(
                `${category.attributes.url}/${page.attributes.slug}`,
                "_blank"
              )
            ),
        };
      }),
    };
  });

  const groups: Groups = [
    {
      name: "Useful Links",
      actions: [
        {
          title: "Timetable",
          icon: <IconCalendar size={16} className="mr-2" />,
          onSelect: () =>
            runCommand(() =>
              window.open("https://fmalmnis.edupage.org/timetable", "_blank")
            ),
        },
        {
          title: "Student Account",
          icon: <IconUser size={16} className="mr-2" />,
          onSelect: () =>
            runCommand(() =>
              window.open("https://sms.fmalm.nis.edu.kz/", "_blank")
            ),
        },
        {
          title: "NIS Online",
          icon: <IconBrandYoutube size={16} className="mr-2" />,
          onSelect: () =>
            runCommand(() =>
              window.open("https://app.online.nis.edu.kz:8800/", "_blank")
            ),
        },
        {
          title: "Virtual School",
          icon: <IconDeviceLaptop size={16} className="mr-2" />,
          onSelect: () =>
            runCommand(() => window.open("https://vs.nis.edu.kz/", "_blank")),
        },
      ],
    },
    {
      name: "Development",
      actions: [
        {
          title: "Source code",
          icon: <IconCode size={16} className="mr-2" />,
          onSelect: () =>
            runCommand(() =>
              window.open(
                "https://github.com/nis-devs/school-website-frontend",
                "_blank"
              )
            ),
        },
      ],
    },
    ...menu,
  ];

  return (
    <>
      <Button
        variant="ghost"
        className="flex h-9 w-9 items-center justify-center p-0"
        onClick={() => setOpen(true)}
        type="button"
        aria-label="Open Command Menu"
        title="Open Command Menu"
      >
        <IconCommand size={20} />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group, i) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.actions.map((action) => (
                  <CommandItem key={action.title} onSelect={action.onSelect}>
                    {action.icon}
                    {action.title}
                  </CommandItem>
                ))}
              </CommandGroup>
              {i !== groups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CommandMenu;
