import { Button, Title } from "@mantine/core";

export default function Home() {
  return <div>
    <div style={{ minHeight: '700px', background: 'linear-gradient(90deg, rgba(0, 198, 141, 1) 0%, rgba(10, 179, 169, 1) 27%, rgba(28, 193, 156, 0.6601234243697479) 77%)', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <div className="Intro-top" style={{ height: '600px' }}>
        <div className="Intro-top-wrapper" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div className="Logo">
            <Title order={1} style={{ maxWidth: '200px', color: 'white', fontFamily: 'Arial', fontSize: '50px', paddingLeft: '50px', paddingTop: '100px' }}>Danhs Electricity Dashboard</Title>
          </div>
          <div className="Leaf-svg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 772 978" fill="none" width="600px" style={{ fill: 'none', overflowClipMargin: 'content-box', overflow: 'hidden', marginTop: '-90px', }}>
              <path d="M808 571.203L624.023 570.267C612.893 570.254 602.223 565.828 594.353 557.959C586.483 550.091 582.056 539.423 582.043 528.295L582.043 369.511C582.055 364.787 580.996 360.121 578.946 355.865C576.896 351.608 573.909 347.871 570.208 344.934L467.762 263.14L452.993 275.454L438.578 263.949L424.796 275.428L410.558 264.05L315.902 342.912C312.026 346.121 308.907 350.146 306.769 354.701C304.631 359.256 303.527 364.227 303.535 369.258L303.535 574.995L376.14 574.995L376.14 627.511C372.144 666.069 335.45 713.477 305.179 729.962C300.931 732.288 296.631 734.564 292.332 736.814C266.588 750.392 239.959 764.424 224.912 792.035C216.949 807.183 211.718 823.617 209.46 840.581C209.764 793.982 210.042 746.27 209.612 698.862C209.915 646.322 210.067 592.669 209.005 540.002C208.246 502.278 201.621 469.055 189.811 443.922C172.918 408.019 143.127 391.811 114.298 376.16C97.6831 367.134 80.4865 357.779 66.0212 344.732C14.4822 298.209 5.32756 197.907 4.61947 142.257C4.26543 117.68 4.03793 93.0365 3.93678 68.3254C4.08851 30.9807 4.34143 -6.16181 4.59432 -42.925C4.79663 -69.2459 4.97356 -96.0218 5.12529 -122.848C3.60795 -122.848 2.06536 -122.848 0.573305 -123C0.143391 -59.9412 -0.185325 4.23007 0.14343 68.2496C-0.134751 131.334 -0.0589906 194.999 0.826122 258.033C2.62164 382.557 35.902 438.385 63.4923 463.29C78.2863 476.615 95.6852 486.046 112.502 495.224C142.065 511.304 170.01 526.475 186.372 561.266C197.954 585.893 204.478 618.585 205.212 655.778C205.49 670.039 205.692 684.4 205.819 698.762C205.819 708.875 205.692 718.837 205.642 728.774C205.414 759.747 205.212 791.757 205.212 823.134C205.212 840.682 204.858 858.532 204.529 875.65C203.973 903.715 203.441 932.16 204.402 960.68C204.402 962.223 204.402 963.74 204.402 965.282C204.407 965.652 204.521 966.013 204.731 966.319C204.731 968.291 204.908 970.263 205.009 972.235C205.111 974.207 205.009 976.078 205.009 978L209.207 977.494L208.904 972.109C209.056 963.9 209.157 955.64 209.207 947.33C211.23 922.602 216.389 900.807 224.381 883.564C238.366 853.501 262.314 840.353 287.603 826.447C302.043 818.533 316.964 810.315 329.659 798.634C348.828 781.137 362.863 754.437 371.36 719.242C378.145 689.398 381.086 658.808 380.11 628.218L380.11 574.641L425.808 574.641C429.765 574.641 433.56 573.07 436.358 570.272C439.156 567.475 440.728 563.68 440.728 559.724L440.728 457.297L392.021 457.297C387.852 457.304 383.855 458.963 380.906 461.911C377.958 464.859 376.298 468.855 376.292 473.024L376.292 571.203L307.48 571.203L307.48 369.258C307.471 364.782 308.453 360.359 310.355 356.307C312.257 352.254 315.032 348.673 318.481 345.819L410.761 268.956L510.778 348.828C514.037 351.409 516.668 354.696 518.472 358.44C520.277 362.185 521.209 366.29 521.197 370.446L521.197 529.206C521.211 541.339 526.038 552.972 534.619 561.551C543.2 570.131 554.835 574.957 566.971 574.97L807.722 575.147C807.772 573.858 807.772 572.517 808 571.203ZM63.5176 347.589C78.3117 360.914 95.7105 370.345 112.528 379.523C142.09 395.604 170.035 410.774 186.397 445.565C197.676 469.56 204.099 501.191 205.161 537.17C202.68 517 197.199 497.314 188.9 478.764C172.159 443.138 142.52 427.032 113.843 411.457C97.1771 402.405 79.9301 393.025 65.389 379.903C20.5769 339.448 7.70478 258.817 4.51837 201.624C14.1535 285.441 40.7575 326.932 63.5176 347.589ZM4.24023 223.419C12.535 315.301 40.4539 359.802 64.2003 381.217C78.8932 394.491 96.2416 403.973 113.008 413.025C141.433 428.473 170.793 444.428 187.307 479.522C197.271 500.685 203.492 527.739 205.54 558.485C205.692 568.7 205.81 578.94 205.895 589.205C202.898 567.299 196.561 545.981 187.105 525.995C169.908 489.434 139.941 471.33 110.985 453.783C95.3816 444.352 79.2472 434.567 65.4647 422.051C20.4251 381.42 7.65423 300.207 4.54368 242.963L4.24023 223.419ZM189.836 559.698C172.943 523.795 143.153 507.588 114.323 491.937C97.7082 482.91 80.5118 473.555 66.0465 460.509C19.1607 418.208 7.45184 331.433 5.09997 274.189C14.3304 360.156 41.2379 402.507 64.2003 423.366C78.1851 436.008 94.3954 445.818 110.075 455.3C138.803 472.696 168.517 490.698 185.486 526.753C197.827 552.829 204.809 581.116 206.021 609.938C206.021 612.466 206.021 615.121 206.021 617.7C203.509 597.692 198.055 578.164 189.836 559.749L189.836 559.698ZM326.928 796.004C314.561 807.281 299.843 815.372 285.605 823.21C260.873 836.788 235.306 850.846 220.79 882.021C215.427 893.905 211.488 906.381 209.056 919.189C209.056 914.79 209.056 910.365 209.056 905.94C210.269 885.782 214.603 865.934 221.902 847.104C227.577 832.998 236.43 820.392 247.773 810.265C258.416 801.339 269.999 793.599 282.318 787.18L285.428 785.461C307.531 773.223 330.392 760.581 344.908 738.432C360.638 714.412 366.201 697.826 374.395 668.218C374.698 667.131 374.977 666.069 375.23 665.007C372.448 705.74 361.978 764.096 326.928 796.055L326.928 796.004ZM391.844 461.039L436.758 461.039L436.758 560.027C436.751 562.976 435.576 565.801 433.491 567.886C431.406 569.971 428.58 571.146 425.631 571.152L379.933 571.152L379.933 473.024C379.94 469.866 381.196 466.838 383.428 464.602C385.659 462.366 388.685 461.103 391.844 461.09L391.844 461.039ZM375.887 654.337C375.128 658.332 374.117 662.782 372.751 667.763C364.608 697.169 359.07 713.654 343.467 737.446C329.204 759.241 306.545 771.782 284.619 783.919L281.509 785.638C269.076 792.117 257.384 799.925 246.635 808.925C235.098 819.248 226.091 832.086 220.309 846.446C214.84 860.19 211.102 874.561 209.182 889.227L209.182 886.269C209.764 874.006 210.699 861.743 212.217 849.556C213.764 830.073 219.226 811.103 228.275 793.779C242.766 767.206 268.889 753.325 294.027 740.126C298.351 737.851 302.675 735.575 306.924 733.249C333.604 718.609 365.089 681.694 376.064 645.715C376.115 648.496 376.013 651.379 375.887 654.388L375.887 654.337ZM566.819 571.152C555.689 571.139 545.019 566.712 537.149 558.844C529.28 550.976 524.853 540.308 524.839 529.18L524.839 370.396C524.847 365.672 523.787 361.008 521.737 356.752C519.688 352.496 516.702 348.759 513.004 345.819L426.819 276.996L438.629 267.16L539.051 347.362C542.381 350.002 545.068 353.361 546.912 357.189C548.756 361.016 549.709 365.212 549.698 369.46L549.698 528.245C549.697 537.782 552.712 547.075 558.312 554.796C563.913 562.516 571.812 568.268 580.88 571.228L566.819 571.152ZM594.839 570.849C583.57 570.809 572.776 566.31 564.815 558.336C556.854 550.363 552.374 539.562 552.354 528.295L552.354 369.511C552.364 364.885 551.327 360.317 549.321 356.148C547.315 351.98 544.392 348.319 540.771 345.44L456.129 277.856L467.939 268.02L567.982 347.893C571.231 350.481 573.852 353.77 575.652 357.513C577.452 361.256 578.383 365.358 578.376 369.511L578.376 528.295C578.391 537.541 581.204 546.565 586.444 554.182C591.684 561.8 599.107 567.654 607.736 570.975L594.839 570.849Z" fill="white"></path>
            </svg>
          </div>
        </div>
        <div className="Intro-bottom" style={{ width: '100%', position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'block', minWidth: '1400px' }}>
          <svg width="100%" height="274" viewBox="0 0 1440 274" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-mask" preserveAspectRatio="none">
            <path d="M333 69.5C167.992 77.6305 24 186.167 -47 258V273.5H1488V0C1363 175 1230 179.5 1133.5 187C856.5 187 617 55.5063 333 69.5Z" fill="white"></path>
          </svg>
        </div>
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p> */}
        <div className="Button-fast-scroll" style={{ display: 'flex', justifyContent: 'center', marginTop: '-240px' }}>
          <Button style={{ backgroundColor: 'Transparent', backgroundRepeat: 'no-repeat', border: 'none', cursor: 'pointer', overflow: 'hidden' }}>Learn more about us</Button>
        </div>
      </div>
    </div>
    <div className="Review-section" style={{ height: '845px', display: 'flex', justifyContent: 'space-evenly' }}>
      <div className="paragraph" style={{ maxWidth: '550px' }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet convallis risus. Vestibulum volutpat rhoncus scelerisque. Phasellus fringilla, nisi sit amet aliquet pharetra, dolor orci cursus leo, eget luctus risus est a risus. Nullam molestie orci odio, a interdum nunc consequat at. Integer auctor est sed metus pulvinar facilisis. Phasellus vel dictum urna, ut ullamcorper diam. Aenean nec risus id justo luctus sollicitudin at quis odio. Vivamus efficitur eu lorem sed sagittis. Duis sed ex at mi egestas fringilla. Sed placerat dolor quis mi ultricies, nec blandit elit dictum.</p>
      </div>
      <div className="Slider">
        <p>sds</p>
      </div>
    </div>
  </div >
}
