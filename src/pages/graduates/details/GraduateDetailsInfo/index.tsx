import {
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
    <>
      <S.Header elevation={0}>
        <Typography variant="h2" gutterBottom>
          {graduate.name_ch}
        </Typography>
        <Typography variant="h5">{graduate.name}</Typography>
      </S.Header>
      <main>
        <List>
          {GRADUATE_INFO_CONFIG_LIST.map((config) => {
            return (
              <div key={config.key}>
                <ListItem>
                  <ListItemIcon>{config.icon}</ListItemIcon>
                  <ListItemText
                    primary={config.primaryLabel}
                    secondary={config.secondaryLabel}
                  />
                </ListItem>
                <ListItem>
                  {config.childType === "text" && (
                    <ListItemText
                      secondaryTypographyProps={{
                        sx: { fontSize: config.fontSize },
                      }}
                      secondary={graduate[config.key] ?? "-"}
                    />
                  )}
                  {config.childType === "list" && (
                    <List component="div" disablePadding>
                      {(graduate[config.key] as string[]).map(
                        (description, i) => (
                          // there is a risk for key collision
                          // eslint-disable-next-line react/no-array-index-key
                          <ListItem key={i}>
                            <ListItemText
                              secondaryTypographyProps={{
                                sx: { fontSize: config.fontSize },
                              }}
                              secondary={description}
                            />
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
    </>
  );
};

export default GraduateDetailsInfo;
