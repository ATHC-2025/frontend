import { DetailedHTMLProps, VideoHTMLAttributes } from "react"

export default function BackgroundVideo({
  poster,
  src,
  ...rest
}: {
  poster: string
  src: string
} & DetailedHTMLProps<
  VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
>) {
  return (
    <video
      autoPlay
      poster={poster}
      controls={false}
      src={src}
      width={100}
      height={100}
      loop
      muted
      {...rest}
      className="w-screen h-screen fixed top-0 left-0 right-0 bottom-0 object-cover z-0"
    ></video>
  )
}
