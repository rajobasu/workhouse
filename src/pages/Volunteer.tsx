import * as React from "react";
import {
  colors,
  FlexColumn,
  FlexRow,
  Text,
  WhiteBaseContainer,
} from "../css/css";
import styled from "styled-components";

interface Column {
  id: "name" | "date" | "address" | "shift" | "calories";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "date", label: "Date", minWidth: 100 },
  {
    id: "address",
    label: "Address",
    minWidth: 300,
  },
  {
    id: "shift",
    label: "Shift",
    minWidth: 100,
  },
  {
    id: "calories",
    label: "Calories Burnt",
    minWidth: 100,
  },
];

interface Data {
  name: string;
  date: string;
  address: string;
  shift: string;
  calories: number;
}

function createData(
  name: string,
  date: string,
  address: string,
  shift: string,
  calories: number
): Data {
  return { name, date, address, shift, calories };
}

const rows = [
  createData(
    "Hougang",
    "01/04/2022 - 30/04/2022",
    "95 Hougang Avenue 4 Hougang Swimming Complex Singapore 538830",
    "Multiple Shifts",
    450
  ),
  createData(
    "Sengkang",
    "10/04/2022 - 15/04/2022",
    "57 Anchorvale Road #02-07 Sengkang Active Health Lab Singapore 544964",
    "10am - 6pm",
    200
  ),
];

export const Volunteer = () => {
  const style1 = {
    width: "100px",
    maxWidth: "300px",
    border: "0.5px solid white",
    margin: "0.5px",
    padding: "5px",
    height: "80px",
  };

  const style3 = {
    width: "300px",
    maxWidth: "300px",
    border: "0.5px solid white",
    margin: "0.5px",
    padding: "5px",
    height: "80px",
  };

  return (
    <WhiteBaseContainer style={{ backgroundColor: colors.black }}>
      <FlexColumn>
        {
          <FlexRow>
            {columns.map((e) => (
              <CellText
                style={{
                  width: e.minWidth,
                  maxWidth: e.minWidth,
                  margin: "0.5px",
                  padding: "5px",
                }}
              >
                {e.label}
              </CellText>
            ))}
          </FlexRow>
        }
        {rows.map((e) => {
          return (
            <FlexRow>
              <CellText style={style1}>{e.name}</CellText>
              <CellText style={style1}>{e.date}</CellText>
              <CellText style={style3}>{e.address}</CellText>
              <CellText style={style1}>{e.shift}</CellText>
              <CellText style={style1}>{e.calories}</CellText>
            </FlexRow>
          );
        })}
      </FlexColumn>
    </WhiteBaseContainer>
  );
};

const CellText = styled(Text)`
  font-weight: bolder;
  font-size: large;
  color: ${colors.white};
`;
