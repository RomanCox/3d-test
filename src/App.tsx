import cls from './App.module.scss'
import {VideoPlayer} from "./VideoPlayer/VideoPlayer.tsx";

export const App = () => {

  return (
    <div className={cls.container}>
      <div className={cls.watermark}>
          <p>karaevelmin@gmail.com</p>
      </div>
      <VideoPlayer />
    </div>
  )
}
