import {
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
    <S.GraduateDetailsInfoPaper>
      <S.Header>
        <Typography variant="h3">{graduate.name_ch}</Typography>
        <Typography variant="h5">{graduate.name}</Typography>
      </S.Header>
      <Divider variant="middle" />
      <main>
        <List>
          {GRADUATE_INFO_CONFIG_LIST.map((config) => {
            if (typeof graduate[config.key] === "undefined") {
              // show nothing if no data (e.g. one_liner)
              return null;
            }
            return (
              <div key={config.key}>
                <S.StyledListItemWithIcon>
                  <ListItemIcon>{config.icon}</ListItemIcon>
                  <ListItemText
                    primary={config.primaryLabel}
                    secondary={config.secondaryLabel}
                  />
                </S.StyledListItemWithIcon>
                <ListItem>
                  {config.childType === "text" && (
                    <S.StyledListItemText
                      secondaryTypographyProps={{
                        sx: { fontSize: config.fontSize },
                      }}
                      secondary={graduate[config.key]}
                    />
                  )}
                  {config.childType === "list" && (
                    <List disablePadding>
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
    </S.GraduateDetailsInfoPaper>
  );
};

export default GraduateDetailsInfo;
