import React from 'react';
import { View } from 'react-native';
import { Polygon, Svg } from 'react-native-svg';

export type Props = {
  frequency: number;
  amplitude: number;
  width: number;
  height: number;
  offset: number;
  bottom?: boolean;
  color?: string;
};

const WavyBackground: React.FC<Props> = ({
  frequency,
  amplitude,
  width,
  height,
  offset,
  color = 'black',
  bottom = false,
}) => {
  const [path, setPath] = React.useState<string | undefined>();

  const getPath = () => {
    const units = (frequency * width) / 100;
    let wavePath = '100 0, 0 0 ';

    for (let i = 0; i <= 100; i++) {
      let val = (
        ((offset + amplitude * Math.cos(i / units)) / height) *
        100
      ).toFixed(2);
      wavePath += `, ${i} ${val}`;
    }

    setPath(wavePath);
  };

  React.useEffect(() => {
    getPath();
  }, [path, frequency, amplitude, width, height, offset, bottom, color]);

  return (
    <View style={{ transform: [{ rotate: bottom ? '180deg' : '0deg' }] }}>
      <Svg
        width="100%"
        height={200}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <Polygon points={path} fill={color} />
      </Svg>
    </View>
  );
};

export default WavyBackground;
