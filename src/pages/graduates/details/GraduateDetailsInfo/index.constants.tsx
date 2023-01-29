import FormatQuote from "@mui/icons-material/FormatQuote";
import Hail from "@mui/icons-material/Hail";
import Sms from "@mui/icons-material/Sms";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";

interface GraduateInfoConfig {
  icon: React.ReactElement;
  label: React.ReactNode;
  key: keyof Graduate;
  childType: "text" | "list";
}

export const GRADUATE_INFO_CONFIG_LIST: GraduateInfoConfig[] = [
  {
    icon: <Sms />,
    label: "毕业留言 · Message",
    key: "message",
    childType: "text",
  },
  {
    icon: <FormatQuote />,
    label: "口头禅 · One Liner",
    key: "one_liner",
    childType: "text",
  },
  {
    icon: <Hail />,
    label: "描述我 · Describe me",
    key: "describe_me",
    childType: "list",
  },
];
