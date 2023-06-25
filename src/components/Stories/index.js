import { LinearGradient } from 'expo-linear-gradient';

export default function Stories() {

  return (
    <LinearGradient
      colors={['#97A3E2', 'white']}
      start={{ x: -2, y: .3 }}
      end={{ x: .6, y: 0 }}
      style={{
        position: "absolute",
        width: 300,
        height: 300,
        top: -80,
        borderRadius: 300,
        transform: [{ scaleX: 2 }],
      }}
    />
  )
}
