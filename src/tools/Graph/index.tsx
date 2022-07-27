/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-return-assign */
import { ResponsiveLine } from '@nivo/line';
import { useTheme } from 'styled-components';
import React from 'react';

export interface ILine {
  id: string;
  color?: string;
  data: { x: string; y: number }[];
  // hidden?: Boolean;
}

export interface Request<Item> {
  data: Item[];
}

const Graph: React.FC<Request<ILine>> = ({ data }) => {
  const { colors } = useTheme();
  // const [values, setValues] = React.useState<Array<ILine>>(data);
  return (
    // @ts-ignore
    <ResponsiveLine
      // data={[...values.filter((inline: ILine) => !inline.hidden)]}
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      theme={{
        crosshair: {
          // Line Dot
          line: { stroke: colors.line },
        },
        background: colors.background,
        textColor: colors.textTable,
        axis: {
          domain: {
            line: { backgroundColor: colors.lineTable },
          },
          ticks: {
            line: { backgroundColor: colors.lineTable },
          },
        },
        grid: {
          line: { backgroundColor: colors.lineTable, borderRadius: '7px' },
        },
        labels: { text: { color: colors.textTable } },
        markers: { lineColor: colors.lineTable, textColor: colors.textTable },
        tooltip: {
          container: {
            background: colors.input,
            color: colors.title,
            fontWeight: '500',
            fontSize: '12px',
          },
        },
      }}
      // onClick={(point, event) => console.log(point, event)}
      yFormat=" >-.2f"
      enableGridX={false}
      colors={{ scheme: 'dark2' }}
      enablePoints
      pointSize={5}
      pointColor={{ from: 'color', modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      areaOpacity={0}
      isInteractive
      legends={[
        {
          // onClick: (datum, event) => {
          //   console.log(values.filter(Obj => Obj.id === datum.id)[0]);
          //   setValues(
          //     data.map(Obj => {
          //       if (Obj.id === datum.id) {
          //         Obj.hidden = !datum.hidden;
          //       }
          //       return Obj;
          //     })
          //   );
          //   console.log(values.filter(Obj => Obj.id === datum.id)[0]);
          // },
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      enableSlices="y"
      crosshairType="x"
      animate={false}
      motionConfig="wobbly"
      useMesh
    />
  );
};

export default Graph;
