import * as React from 'react'
import Svg, { Defs, G, Path, Ellipse, Rect, ClipPath } from 'react-native-svg'

interface MyProps {}

const SpotifyLogo: React.FC<MyProps> = ({}) => {
  return (
    <Svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 114 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_0_87)">
        <Path
          d="M17.7336 0C8.3612 0 0.763 7.6111 0.763 16.9997C0.763 26.3893 8.3612 34 17.7336 34C27.1064 34 34.7042 26.3893 34.7042 16.9997C34.7042 7.61171 27.107 0 17.7336 0ZM25.5162 24.5184C25.2114 25.0192 24.5601 25.1762 24.0618 24.871C20.0767 22.4312 15.0606 21.88 9.15335 23.2318C8.58411 23.3626 8.01668 23.0051 7.887 22.435C7.75669 21.8648 8.11193 21.2964 8.6826 21.1665C15.1472 19.686 20.6923 20.3232 25.1654 23.0613C25.664 23.3678 25.8222 24.0191 25.5162 24.5184ZM27.5934 19.8902C27.2096 20.514 26.3953 20.7097 25.7734 20.3267C21.2127 17.5184 14.2583 16.7049 8.86276 18.3456C8.163 18.5573 7.42393 18.1623 7.21156 17.4625C7.0008 16.7616 7.39537 16.0226 8.0939 15.8095C14.2571 13.9362 21.919 14.8436 27.1575 18.0683C27.7796 18.452 27.9764 19.2678 27.5934 19.8902ZM27.7717 15.0702C22.3014 11.8159 13.2781 11.5166 8.05599 13.1043C7.21743 13.3591 6.33062 12.8849 6.0765 12.0448C5.82237 11.2044 6.29536 10.3167 7.13454 10.0613C13.1292 8.23838 23.0945 8.59058 29.3917 12.3353C30.146 12.7838 30.3934 13.7596 29.9464 14.5141C29.5005 15.2697 28.5236 15.5188 27.7717 15.0702ZM46.9344 15.6938C44.0043 14.9938 43.4827 14.5026 43.4827 13.4703C43.4827 12.4951 44.3992 11.8388 45.7623 11.8388C47.0836 11.8388 48.3937 12.3372 49.7673 13.3631C49.8088 13.3942 49.8609 13.4066 49.9122 13.3985C49.9634 13.3907 50.0088 13.3625 50.0388 13.3201L51.4696 11.2998C51.5283 11.2166 51.5123 11.1019 51.4331 11.0384C49.7983 9.72435 47.9574 9.0855 45.8057 9.0855C42.6419 9.0855 40.432 10.9874 40.432 13.7086C40.432 16.6268 42.3383 17.6601 45.6326 18.4576C48.4365 19.1046 48.9097 19.6466 48.9097 20.6155C48.9097 21.6892 47.9528 22.3567 46.4128 22.3567C44.7024 22.3567 43.3074 21.7796 41.7468 20.4257C41.7081 20.3922 41.655 20.377 41.6059 20.3799C41.5543 20.3841 41.507 20.4081 41.4742 20.4477L39.87 22.3601C39.8027 22.4395 39.8112 22.5581 39.8891 22.6267C41.7048 24.2505 43.938 25.1082 46.348 25.1082C49.7572 25.1082 51.9602 23.2422 51.9602 20.3541C51.9663 17.916 50.5092 16.5661 46.9405 15.6964L46.9344 15.6938ZM59.6731 12.799C58.1954 12.799 56.9833 13.382 55.9838 14.5767V13.232C55.9838 13.1258 55.8979 13.0393 55.7921 13.0393H53.1684C53.0624 13.0393 52.9767 13.1258 52.9767 13.232V28.1733C52.9767 28.2794 53.0624 28.3659 53.1684 28.3659H55.7921C55.8979 28.3659 55.9838 28.2794 55.9838 28.1733V23.4569C56.9835 24.5807 58.1958 25.1299 59.6731 25.1299C62.4188 25.1299 65.1984 23.0126 65.1984 18.9651C65.2024 14.9167 62.422 12.7988 59.6761 12.7988L59.6731 12.799ZM62.1474 18.9651C62.1474 21.0262 60.8801 22.4645 59.0653 22.4645C57.2713 22.4645 55.9179 20.9608 55.9179 18.9651C55.9179 16.9697 57.2713 15.4658 59.0653 15.4658C60.8507 15.4656 62.1474 16.9372 62.1474 18.9651ZM72.3226 12.799C68.7865 12.799 66.0163 15.5265 66.0163 19.0092C66.0163 22.4539 68.7675 25.1528 72.2792 25.1528C75.8278 25.1528 78.6066 22.4344 78.6066 18.9651C78.6066 15.5078 75.8467 12.799 72.3226 12.799ZM72.3226 22.485C70.4417 22.485 69.0238 20.9712 69.0238 18.9641C69.0238 16.9485 70.3927 15.4859 72.2792 15.4859C74.1722 15.4859 75.5996 16.9997 75.5996 19.0082C75.5996 21.0234 74.2214 22.485 72.3226 22.485ZM86.1575 13.0394H83.2704V10.0824C83.2704 9.97647 83.1849 9.89 83.0789 9.89H80.4556C80.3494 9.89 80.2632 9.97647 80.2632 10.0824V13.0394H79.0017C78.8962 13.0394 78.8106 13.1258 78.8106 13.232V15.4908C78.8106 15.5968 78.8962 15.6834 79.0017 15.6834H80.2632V21.528C80.2632 23.8899 81.4368 25.0874 83.7513 25.0874C84.6924 25.0874 85.4732 24.8928 86.209 24.4748C86.2688 24.4413 86.3059 24.3767 86.3059 24.3081V22.1571C86.3059 22.0907 86.2714 22.028 86.2147 21.9933C86.1575 21.9574 86.0864 21.9556 86.0278 21.9846C85.5224 22.2394 85.0338 22.3569 84.4877 22.3569C83.6459 22.3569 83.2704 21.974 83.2704 21.1159V15.6845H86.1575C86.2635 15.6845 86.3488 15.598 86.3488 15.4918V13.2332C86.3529 13.1271 86.2678 13.0406 86.1604 13.0406L86.1575 13.0394ZM96.2172 13.0509V12.6877C96.2172 11.6193 96.6261 11.1429 97.5433 11.1429C98.0903 11.1429 98.5296 11.2517 99.0217 11.4161C99.0823 11.4352 99.1455 11.4257 99.1947 11.3893C99.2454 11.353 99.274 11.2947 99.274 11.233V9.0183C99.274 8.93364 99.2197 8.85874 99.1382 8.83376C98.6184 8.67887 97.9533 8.51992 96.9575 8.51992C94.5341 8.51992 93.2532 9.88693 93.2532 12.4717V13.028H91.9927C91.8869 13.028 91.8002 13.1144 91.8002 13.2204V15.4908C91.8002 15.5967 91.8869 15.6834 91.9927 15.6834H93.2532V24.6985C93.2532 24.8046 93.3387 24.8911 93.4445 24.8911H96.0682C96.1742 24.8911 96.2605 24.8046 96.2605 24.6985V15.684H98.7102L102.463 24.6969C102.037 25.6439 101.618 25.8323 101.046 25.8323C100.584 25.8323 100.097 25.694 99.5992 25.4212C99.5524 25.3954 99.4969 25.3911 99.4464 25.4068C99.3963 25.4244 99.3542 25.4618 99.3329 25.5105L98.4437 27.4648C98.4013 27.5571 98.4376 27.6656 98.5264 27.7135C99.4547 28.2171 100.293 28.4321 101.328 28.4321C103.266 28.4321 104.337 27.5281 105.281 25.0962L109.832 13.314C109.855 13.2547 109.848 13.1877 109.812 13.1352C109.776 13.083 109.718 13.0515 109.654 13.0515H106.923C106.841 13.0515 106.768 13.1037 106.741 13.1806L103.943 21.1866L100.878 13.1754C100.85 13.1008 100.779 13.0515 100.699 13.0515L96.2172 13.0509ZM90.3848 13.0394H87.7611C87.6551 13.0394 87.5688 13.1258 87.5688 13.232V24.6985C87.5688 24.8046 87.6551 24.8911 87.7611 24.8911H90.3848C90.4906 24.8911 90.5772 24.8046 90.5772 24.6985V13.2328C90.5772 13.2075 90.5723 13.1824 90.5626 13.159C90.553 13.1355 90.5388 13.1143 90.5209 13.0964C90.503 13.0785 90.4818 13.0643 90.4584 13.0546C90.435 13.045 90.4101 13.0393 90.3848 13.0394ZM89.0879 7.81837C88.0485 7.81837 87.2051 8.66122 87.2051 9.70242C87.2051 10.7442 88.0487 11.5881 89.0879 11.5881C90.1269 11.5881 90.9695 10.7442 90.9695 9.70242C90.9695 8.66143 90.1265 7.81837 89.0889 7.81837H89.0879ZM112.073 16.726C111.034 16.726 110.226 15.8907 110.226 14.8763C110.226 13.8619 111.045 13.017 112.082 13.017C113.121 13.017 113.929 13.8522 113.929 14.8657C113.929 15.8801 113.11 16.726 112.073 16.726ZM112.083 13.2009C111.137 13.2009 110.421 13.9541 110.421 14.8763C110.421 15.7981 111.132 16.5411 112.073 16.5411C113.019 16.5411 113.735 15.7886 113.735 14.8657C113.735 13.9439 113.023 13.2009 112.083 13.2009ZM112.492 15.0559L113.014 15.7884H112.574L112.104 15.1165H111.7V15.7884H111.331V13.8469H112.195C112.646 13.8469 112.942 14.0777 112.942 14.4662C112.944 14.7845 112.759 14.979 112.494 15.056L112.492 15.0559ZM112.18 14.18H111.699V14.7941H112.18C112.42 14.7941 112.563 14.6766 112.563 14.4868C112.563 14.287 112.419 14.18 112.18 14.18Z"
          fill="#393939"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_87">
          <Rect
            width="113.166"
            height="34"
            fill="white"
            transform="translate(0.763)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SpotifyLogo