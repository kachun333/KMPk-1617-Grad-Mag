import FormatQuote from "@mui/icons-material/FormatQuote";
import Hail from "@mui/icons-material/Hail";
import Sms from "@mui/icons-material/Sms";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";

interface GraduateInfoConfig {
  icon: React.ReactElement;
  primaryLabel: React.ReactNode;
  secondaryLabel?: React.ReactNode;
  key: keyof Graduate;
  childType: "text" | "list";
  fontSize: string;
}

export const GRADUATE_INFO_CONFIG_LIST: GraduateInfoConfig[] = [
  {
    icon: <Sms />,
    primaryLabel: "毕业留言",
    secondaryLabel: "Graduation Message",
    key: "message",
    childType: "text",
    fontSize: "1.5rem",
  },
  {
    icon: <FormatQuote />,
    primaryLabel: "口头禅",
    secondaryLabel: "One Liner",
    key: "one_liner",
    childType: "text",
    fontSize: "1.2rem",
  },
  {
    icon: <Hail />,
    primaryLabel: "描述我",
    secondaryLabel: "Describe Me",
    key: "describe_me",
    childType: "list",
    fontSize: "1rem",
  },
];
