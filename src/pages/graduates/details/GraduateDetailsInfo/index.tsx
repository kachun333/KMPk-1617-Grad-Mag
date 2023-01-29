import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Graduate } from "pages/graduates/graduates.interface";
import React from "react";
import { GRADUATE_INFO_CONFIG_LIST } from "./index.constants";
import * as S from "./index.styled";

interface GraduateDetailsInfoProps {
  graduate: Graduate;
}

const GraduateDetailsInfo: React.FC<GraduateDetailsInfoProps> = ({
  graduate,
}) => {
  return (
    <Box>
      <S.Header>
        <Typography variant="h4">{graduate.name_ch}</Typography>
        <Typography variant="subtitle1">{graduate.name}</Typography>
      </S.Header>
      <Divider variant="middle" />
      <main>
        <List>
          {GRADUATE_INFO_CONFIG_LIST.map((config) => {
            return (
              <div key={config.key}>
                <ListItem>
                  <ListItemIcon>{config.icon}</ListItemIcon>
                  <ListItemText primary={config.label} />
                </ListItem>
                <ListItem>
                  {config.childType === "text" && (
                    <ListItemText secondary={graduate[config.key]} />
                  )}
                  {config.childType === "list" && (
                    <List component="div" disablePadding>
                      {(graduate[config.key] as string[]).map(
                        (description, i) => (
                          // there is a risk for key collision
                          // eslint-disable-next-line react/no-array-index-key
                          <ListItem key={i}>
                            <ListItemText secondary={description} />
                          </ListItem>
                        )
                      )}
                    </List>
                  )}
                </ListItem>
              </div>
            );
          })}
        </List>
      </main>
    </Box>
  );
};

export default GraduateDetailsInfo;
