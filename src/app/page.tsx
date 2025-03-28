import CommandPromptText from "./Components/CommandPromptText/CommandPromptText";
import Navbar from "./Components/Navbar/Navbar"
import Image from 'next/image';
import ProjectBox from "./Components/ProjectBox/ProjectBox";

// png imports from public
import BandSocImg from '/public/static/bandsoc.png'
import LeetTab from '/public/static/leettab.png'
import DiscordBot from '/public/static/discordbot.png'
import SignLink from '/public/static/signlink.png'
import MachineLearning from '/public/static/ml.png'
import TheSceneImg from '/public/static/thescene.png'
import Contact from "./Components/Contacts/Contact";
import CompilerImg from '/public/static/lab-snapshot.png'
import profileImage from '/public/static/photo-me.png'

// Constants
const height = 400
const width = 800
const contentPadding = 8
const text = ['~/portfolio> whoami','ramiz abdulla',' ~/portfolio>cat bio.txt','Im a full stack developer with a passion  for creating both web and mobile applications. I adopt the the ideology  of continuous learning throughout the creation of software, I also  believe that there is always something to learn no matter how  experienced. I have graduated from Queen Mary University of London with a  first class honours for a  bachelors of science for Computer Science.','~portfolio> cd projects','~portfolio/projects> open .']
const PATH_TO_SVGS = '/static/'



export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="bio" style={{height:'30px'}}></div>

      <div id="bio-title" style={{width:'100vw',maxWidth:'180px',margin:'auto',marginBottom:'1.5rem'}}>
          <svg width="216" height="148" viewBox="0 0 216 148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.0391 73.0977H17.6953L17.5781 64.0156H33.6914C36.1133 64.0156 38.2617 63.4688 40.1367 62.375C42.0117 61.2812 43.4766 59.7188 44.5312 57.6875C45.625 55.6172 46.1719 53.1562 46.1719 50.3047C46.1719 47.1797 45.7031 44.6406 44.7656 42.6875C43.8672 40.6953 42.4805 39.25 40.6055 38.3516C38.7695 37.4141 36.4258 36.9453 33.5742 36.9453H19.9805V113H9.19922V27.6875H33.5742C37.2461 27.6875 40.5273 28.1367 43.418 29.0352C46.3086 29.8945 48.75 31.2617 50.7422 33.1367C52.7734 34.9727 54.3164 37.3164 55.3711 40.168C56.4258 43.0195 56.9531 46.4375 56.9531 50.4219C56.9531 53.9375 56.1523 57.1211 54.5508 59.9727C52.9883 62.7852 50.8008 65.0898 47.9883 66.8867C45.1758 68.6836 41.9336 69.8359 38.2617 70.3438L35.0391 73.0977ZM34.6289 113H13.2422L19.5117 103.801H34.6289C37.4414 103.801 39.8242 103.176 41.7773 101.926C43.7305 100.676 45.2148 98.918 46.2305 96.6523C47.2852 94.3477 47.8125 91.6328 47.8125 88.5078C47.8125 85.3438 47.3828 82.6094 46.5234 80.3047C45.6641 78 44.2969 76.2227 42.4219 74.9727C40.5469 73.7227 38.0859 73.0977 35.0391 73.0977H21.1523L21.2695 64.0156H40.0195L42.4219 67.2969C45.9375 67.6484 48.8867 68.8203 51.2695 70.8125C53.6914 72.7656 55.5078 75.2656 56.7188 78.3125C57.9688 81.3594 58.5938 84.7188 58.5938 88.3906C58.5938 93.7031 57.5977 98.1953 55.6055 101.867C53.6523 105.5 50.8789 108.273 47.2852 110.188C43.6914 112.062 39.4727 113 34.6289 113ZM85.957 27.6875V113H75.1758V27.6875H85.957ZM160.195 62.9609V77.7852C160.195 83.8008 159.531 89.0938 158.203 93.6641C156.914 98.1953 155.02 101.984 152.52 105.031C150.02 108.078 147.012 110.363 143.496 111.887C139.98 113.41 136.016 114.172 131.602 114.172C127.344 114.172 123.457 113.41 119.941 111.887C116.426 110.363 113.398 108.078 110.859 105.031C108.32 101.984 106.348 98.1953 104.941 93.6641C103.574 89.0938 102.891 83.8008 102.891 77.7852V62.9609C102.891 56.9453 103.574 51.6719 104.941 47.1406C106.309 42.5703 108.262 38.7617 110.801 35.7148C113.34 32.668 116.367 30.3828 119.883 28.8594C123.398 27.2969 127.285 26.5156 131.543 26.5156C135.957 26.5156 139.922 27.2969 143.438 28.8594C146.992 30.3828 150 32.668 152.461 35.7148C154.961 38.7617 156.875 42.5703 158.203 47.1406C159.531 51.6719 160.195 56.9453 160.195 62.9609ZM149.531 77.7852V62.8438C149.531 58.1562 149.141 54.1328 148.359 50.7734C147.578 47.375 146.426 44.6016 144.902 42.4531C143.379 40.3047 141.504 38.7227 139.277 37.707C137.051 36.6523 134.473 36.125 131.543 36.125C128.77 36.125 126.27 36.6523 124.043 37.707C121.855 38.7227 119.98 40.3047 118.418 42.4531C116.855 44.6016 115.645 47.375 114.785 50.7734C113.965 54.1328 113.555 58.1562 113.555 62.8438V77.7852C113.555 82.5117 113.965 86.5742 114.785 89.9727C115.645 93.332 116.855 96.1055 118.418 98.293C120.02 100.441 121.934 102.043 124.16 103.098C126.387 104.113 128.867 104.621 131.602 104.621C134.531 104.621 137.109 104.113 139.336 103.098C141.602 102.043 143.477 100.441 144.961 98.293C146.484 96.1055 147.617 93.332 148.359 89.9727C149.141 86.5742 149.531 82.5117 149.531 77.7852Z" fill="#2E2E2E"/>
            <path d="M0 124.719H167.637V130.578H0V124.719Z" fill="#2E2E2E"/>
            <path d="M41.6198 72.0977H24.276L24.1588 63.0156H40.2721C42.694 63.0156 44.8424 62.4688 46.7174 61.375C48.5924 60.2812 50.0573 58.7188 51.1119 56.6875C52.2057 54.6172 52.7526 52.1562 52.7526 49.3047C52.7526 46.1797 52.2838 43.6406 51.3463 41.6875C50.4479 39.6953 49.0612 38.25 47.1862 37.3516C45.3502 36.4141 43.0065 35.9453 40.1549 35.9453H26.5612V112H15.7799V26.6875H40.1549C43.8268 26.6875 47.108 27.1367 49.9987 28.0352C52.8893 28.8945 55.3307 30.2617 57.3229 32.1367C59.3541 33.9727 60.8971 36.3164 61.9518 39.168C63.0065 42.0195 63.5338 45.4375 63.5338 49.4219C63.5338 52.9375 62.733 56.1211 61.1315 58.9727C59.569 61.7852 57.3815 64.0898 54.569 65.8867C51.7565 67.6836 48.5143 68.8359 44.8424 69.3438L41.6198 72.0977ZM41.2096 112H19.8229L26.0924 102.801H41.2096C44.0221 102.801 46.4049 102.176 48.358 100.926C50.3112 99.6758 51.7955 97.918 52.8112 95.6523C53.8658 93.3477 54.3932 90.6328 54.3932 87.5078C54.3932 84.3438 53.9635 81.6094 53.1041 79.3047C52.2448 77 50.8776 75.2227 49.0026 73.9727C47.1276 72.7227 44.6666 72.0977 41.6198 72.0977H27.733L27.8502 63.0156H46.6002L49.0026 66.2969C52.5182 66.6484 55.4674 67.8203 57.8502 69.8125C60.2721 71.7656 62.0885 74.2656 63.2994 77.3125C64.5494 80.3594 65.1744 83.7188 65.1744 87.3906C65.1744 92.7031 64.1783 97.1953 62.1862 100.867C60.233 104.5 57.4596 107.273 53.8658 109.188C50.2721 111.062 46.0533 112 41.2096 112ZM92.5377 26.6875V112H81.7565V26.6875H92.5377ZM166.776 61.9609V76.7852C166.776 82.8008 166.112 88.0938 164.784 92.6641C163.495 97.1953 161.6 100.984 159.1 104.031C156.6 107.078 153.592 109.363 150.077 110.887C146.561 112.41 142.596 113.172 138.182 113.172C133.924 113.172 130.038 112.41 126.522 110.887C123.006 109.363 119.979 107.078 117.44 104.031C114.901 100.984 112.928 97.1953 111.522 92.6641C110.155 88.0938 109.471 82.8008 109.471 76.7852V61.9609C109.471 55.9453 110.155 50.6719 111.522 46.1406C112.889 41.5703 114.842 37.7617 117.381 34.7148C119.921 31.668 122.948 29.3828 126.464 27.8594C129.979 26.2969 133.866 25.5156 138.124 25.5156C142.538 25.5156 146.503 26.2969 150.018 27.8594C153.573 29.3828 156.581 31.668 159.042 34.7148C161.542 37.7617 163.456 41.5703 164.784 46.1406C166.112 50.6719 166.776 55.9453 166.776 61.9609ZM156.112 76.7852V61.8438C156.112 57.1562 155.721 53.1328 154.94 49.7734C154.159 46.375 153.006 43.6016 151.483 41.4531C149.96 39.3047 148.085 37.7227 145.858 36.707C143.631 35.6523 141.053 35.125 138.124 35.125C135.35 35.125 132.85 35.6523 130.624 36.707C128.436 37.7227 126.561 39.3047 124.999 41.4531C123.436 43.6016 122.225 46.375 121.366 49.7734C120.546 53.1328 120.135 57.1562 120.135 61.8438V76.7852C120.135 81.5117 120.546 85.5742 121.366 88.9727C122.225 92.332 123.436 95.1055 124.999 97.293C126.6 99.4414 128.514 101.043 130.741 102.098C132.967 103.113 135.448 103.621 138.182 103.621C141.112 103.621 143.69 103.113 145.917 102.098C148.182 101.043 150.057 99.4414 151.542 97.293C153.065 95.1055 154.198 92.332 154.94 88.9727C155.721 85.5742 156.112 81.5117 156.112 76.7852Z" fill="#B1EE04"/>
            <path d="M6.58069 123.719H174.217V129.578H6.58069V123.719Z" fill="#B1EE04"/>
            <path d="M48.2003 73.0977H30.8566L30.7394 64.0156H46.8527C49.2745 64.0156 51.423 63.4688 53.298 62.375C55.173 61.2812 56.6378 59.7188 57.6925 57.6875C58.7863 55.6172 59.3331 53.1562 59.3331 50.3047C59.3331 47.1797 58.8644 44.6406 57.9269 42.6875C57.0284 40.6953 55.6417 39.25 53.7667 38.3516C51.9308 37.4141 49.587 36.9453 46.7355 36.9453H33.1417V113H22.3605V27.6875H46.7355C50.4073 27.6875 53.6886 28.1367 56.5792 29.0352C59.4698 29.8945 61.9113 31.2617 63.9034 33.1367C65.9347 34.9727 67.4777 37.3164 68.5323 40.168C69.587 43.0195 70.1144 46.4375 70.1144 50.4219C70.1144 53.9375 69.3136 57.1211 67.712 59.9727C66.1495 62.7852 63.962 65.0898 61.1495 66.8867C58.337 68.6836 55.0948 69.8359 51.423 70.3438L48.2003 73.0977ZM47.7902 113H26.4034L32.673 103.801H47.7902C50.6027 103.801 52.9855 103.176 54.9386 101.926C56.8917 100.676 58.3761 98.918 59.3917 96.6523C60.4464 94.3477 60.9738 91.6328 60.9738 88.5078C60.9738 85.3438 60.5441 82.6094 59.6847 80.3047C58.8253 78 57.4581 76.2227 55.5831 74.9727C53.7081 73.7227 51.2472 73.0977 48.2003 73.0977H34.3136L34.4308 64.0156H53.1808L55.5831 67.2969C59.0988 67.6484 62.048 68.8203 64.4308 70.8125C66.8527 72.7656 68.6691 75.2656 69.88 78.3125C71.13 81.3594 71.755 84.7188 71.755 88.3906C71.755 93.7031 70.7589 98.1953 68.7667 101.867C66.8136 105.5 64.0402 108.273 60.4464 110.188C56.8527 112.062 52.6339 113 47.7902 113ZM99.1183 27.6875V113H88.337V27.6875H99.1183ZM173.357 62.9609V77.7852C173.357 83.8008 172.693 89.0938 171.364 93.6641C170.075 98.1953 168.181 101.984 165.681 105.031C163.181 108.078 160.173 110.363 156.657 111.887C153.142 113.41 149.177 114.172 144.763 114.172C140.505 114.172 136.618 113.41 133.103 111.887C129.587 110.363 126.56 108.078 124.021 105.031C121.482 101.984 119.509 98.1953 118.103 93.6641C116.735 89.0938 116.052 83.8008 116.052 77.7852V62.9609C116.052 56.9453 116.735 51.6719 118.103 47.1406C119.47 42.5703 121.423 38.7617 123.962 35.7148C126.501 32.668 129.528 30.3828 133.044 28.8594C136.56 27.2969 140.446 26.5156 144.704 26.5156C149.118 26.5156 153.083 27.2969 156.599 28.8594C160.153 30.3828 163.161 32.668 165.622 35.7148C168.122 38.7617 170.036 42.5703 171.364 47.1406C172.693 51.6719 173.357 56.9453 173.357 62.9609ZM162.693 77.7852V62.8438C162.693 58.1562 162.302 54.1328 161.521 50.7734C160.739 47.375 159.587 44.6016 158.064 42.4531C156.54 40.3047 154.665 38.7227 152.439 37.707C150.212 36.6523 147.634 36.125 144.704 36.125C141.931 36.125 139.431 36.6523 137.204 37.707C135.017 38.7227 133.142 40.3047 131.579 42.4531C130.017 44.6016 128.806 47.375 127.946 50.7734C127.126 54.1328 126.716 58.1562 126.716 62.8438V77.7852C126.716 82.5117 127.126 86.5742 127.946 89.9727C128.806 93.332 130.017 96.1055 131.579 98.293C133.181 100.441 135.095 102.043 137.321 103.098C139.548 104.113 142.028 104.621 144.763 104.621C147.693 104.621 150.271 104.113 152.497 103.098C154.763 102.043 156.638 100.441 158.122 98.293C159.646 96.1055 160.778 93.332 161.521 89.9727C162.302 86.5742 162.693 82.5117 162.693 77.7852Z" fill="#2E2E2E"/>
            <path d="M13.1613 124.719H180.798V130.578H13.1613V124.719Z" fill="#2E2E2E"/>
          </svg>
      </div>

      <div className="bio-container">
        <div className="image-container">
          <div className="me-image" style={{marginTop:'-650px',minWidth:'520px',maxWidth:'520px',paddingBottom:'20px',scale:0.8, zIndex:0}}>
            <Image 
            style={{position:'relative', top:'680px',left:'135px'}}
            src={profileImage}
            alt="Picture of me"
            width={350}
            />
            <div>
              <svg width="357" height="659" viewBox="0 0 357 659" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M101.754 191.395L24 168.074L24 157.059L109.312 184.539V191.453L101.754 191.395ZM24 210.262L101.754 186.941L109.312 186.824V193.797L24 221.277V210.262ZM55.582 210.262H46.3242V169.129H55.582V210.262ZM63.9023 258.836L63.9023 241.492L72.9844 241.375V257.488C72.9844 259.91 73.5312 262.059 74.625 263.934C75.7187 265.809 77.2812 267.273 79.3125 268.328C81.3828 269.422 83.8437 269.969 86.6953 269.969C89.8203 269.969 92.3594 269.5 94.3125 268.562C96.3047 267.664 97.75 266.277 98.6484 264.402C99.5859 262.566 100.055 260.223 100.055 257.371V243.777H24L24 232.996H109.312L109.312 257.371C109.312 261.043 108.863 264.324 107.965 267.215C107.105 270.105 105.738 272.547 103.863 274.539C102.027 276.57 99.6836 278.113 96.832 279.168C93.9805 280.223 90.5625 280.75 86.5781 280.75C83.0625 280.75 79.8789 279.949 77.0273 278.348C74.2148 276.785 71.9102 274.598 70.1133 271.785C68.3164 268.973 67.1641 265.73 66.6562 262.059L63.9023 258.836ZM24 258.426L24 237.039L33.1992 243.309V258.426C33.1992 261.238 33.8242 263.621 35.0742 265.574C36.3242 267.527 38.082 269.012 40.3477 270.027C42.6523 271.082 45.3672 271.609 48.4922 271.609C51.6562 271.609 54.3906 271.18 56.6953 270.32C59 269.461 60.7773 268.094 62.0273 266.219C63.2773 264.344 63.9023 261.883 63.9023 258.836V244.949L72.9844 245.066V263.816L69.7031 266.219C69.3516 269.734 68.1797 272.684 66.1875 275.066C64.2344 277.488 61.7344 279.305 58.6875 280.516C55.6406 281.766 52.2812 282.391 48.6094 282.391C43.2969 282.391 38.8047 281.395 35.1328 279.402C31.5 277.449 28.7266 274.676 26.8125 271.082C24.9375 267.488 24 263.27 24 258.426ZM24 317.84V303.309L33.1992 303.426V317.84C33.1992 322.957 34.1758 327.117 36.1289 330.32C38.1211 333.523 41.0508 335.887 44.918 337.41C48.8242 338.934 53.6484 339.695 59.3906 339.695H73.9805C78.5117 339.695 82.418 339.266 85.6992 338.406C88.9805 337.547 91.6758 336.258 93.7852 334.539C95.8945 332.82 97.457 330.652 98.4727 328.035C99.5273 325.418 100.055 322.352 100.055 318.836V303.016H109.312V318.836C109.312 323.641 108.551 327.977 107.027 331.844C105.543 335.711 103.297 339.031 100.289 341.805C97.3203 344.578 93.6289 346.688 89.2148 348.133C84.8008 349.617 79.6836 350.359 73.8633 350.359H59.3906C53.5703 350.359 48.4531 349.617 44.0391 348.133C39.625 346.688 35.9336 344.559 32.9648 341.746C29.9961 338.934 27.75 335.516 26.2266 331.492C24.7422 327.508 24 322.957 24 317.84ZM109.312 309.285H24V298.504H109.312V309.285ZM109.312 407.195V417.977H49.2539C42.8477 417.977 37.7109 416.746 33.8437 414.285C29.9766 411.824 27.1641 408.582 25.4062 404.559C23.6875 400.574 22.8281 396.277 22.8281 391.668C22.8281 386.746 23.6875 382.312 25.4062 378.367C27.1641 374.422 29.9766 371.277 33.8437 368.934C37.7109 366.629 42.8477 365.477 49.2539 365.477H109.312V376.199H49.2539C44.8008 376.199 41.3242 376.824 38.8242 378.074C36.3242 379.363 34.5664 381.16 33.5508 383.465C32.5352 385.809 32.0273 388.543 32.0273 391.668C32.0273 394.832 32.5352 397.566 33.5508 399.871C34.5664 402.215 36.3242 404.012 38.8242 405.262C41.3242 406.551 44.8008 407.195 49.2539 407.195H109.312ZM33.1992 478.68H24L24 443.289H33.1992L33.1992 478.68ZM109.312 445.223H24V434.441H109.312V445.223ZM33.1992 535.75H24V500.359H33.1992V535.75ZM109.312 502.293H24V491.512H109.312V502.293ZM101.754 577.41L24 554.09L24 543.074L109.312 570.555V577.469L101.754 577.41ZM24 596.277L101.754 572.957L109.312 572.84V579.812L24 607.293V596.277ZM55.582 596.277H46.3242V555.145H55.582V596.277Z" fill="#2E2E2E"/>
                <path d="M12.2812 127L12.2812 609.754H6.42187L6.42188 127H12.2812Z" fill="#2E2E2E"/>
                <path d="M16.2578 26.6875H40.1055C45.6523 26.6875 50.3008 27.6641 54.0508 29.6172C57.8398 31.5703 60.6914 34.4609 62.6055 38.2891C64.5586 42.0781 65.5352 46.7461 65.5352 52.293C65.5352 56.1992 64.8906 59.7734 63.6016 63.0156C62.3125 66.2188 60.4375 68.9531 57.9766 71.2188C55.5156 73.4453 52.5273 75.1055 49.0117 76.1992L46.082 77.4297H24.8125L24.6953 68.2305H39.9883C43.2695 68.2305 46.0039 67.5273 48.1914 66.1211C50.3789 64.6758 52.0195 62.7422 53.1133 60.3203C54.207 57.8984 54.7539 55.2227 54.7539 52.293C54.7539 49.0117 54.2656 46.1406 53.2891 43.6797C52.3125 41.2188 50.75 39.3242 48.6016 37.9961C46.4922 36.6289 43.6602 35.9453 40.1055 35.9453H27.0391V112H16.2578V26.6875ZM57.2148 112L40.2227 73.3281L51.4141 73.2695L68.7578 111.297V112H57.2148ZM107.605 34.2461L84.2852 112H73.2695L100.75 26.6875H107.664L107.605 34.2461ZM126.473 112L103.152 34.2461L103.035 26.6875H110.008L137.488 112H126.473ZM126.473 80.418V89.6758H85.3398V80.418H126.473ZM152.605 26.6875H163.035L185.359 96.2383L207.625 26.6875H218.055L189.402 112H181.199L152.605 26.6875ZM149.207 26.6875H158.348L159.93 78.7188V112H149.207V26.6875ZM212.254 26.6875H221.395V112H210.672V78.7188L212.254 26.6875ZM251.16 26.6875V112H240.379V26.6875H251.16ZM318.426 102.801V112H270.203V102.801H318.426ZM316.902 34.8906L272.723 112H266.102V103.562L310.223 26.6875H316.902V34.8906ZM312.332 26.6875V35.9453H266.453V26.6875H312.332Z" fill="#2E2E2E"/>
                <path d="M7 123.719H323.465V129.578H7V123.719Z" fill="#2E2E2E"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="animated">
          <CommandPromptText subtext title={'who-am-i'} height={height} width={width} contentPadding={contentPadding} text={text} />
        </div>
      </div>
      <div id="projects" className="projects-container">
        <div style={{width:'100vw',maxWidth:'372px',margin:'auto',marginBottom:'1.5rem',marginTop:'1rem'}}>
          <svg width="372" height="148" viewBox="0 0 522 151" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M36.387 78.543H17.754v-9.2h18.633q5.273 0 8.496-2.109 3.281-2.109 4.746-5.859 1.523-3.75 1.523-8.555 0-4.395-1.523-8.261-1.466-3.868-4.746-6.211-3.223-2.403-8.496-2.403H19.98V112H9.199V26.688h27.188q8.262 0 13.945 3.34 5.684 3.34 8.613 9.257 2.988 5.86 2.989 13.418 0 8.203-2.989 14.004-2.93 5.8-8.613 8.848-5.683 2.988-13.945 2.988M75.82 26.687h23.848q8.32 0 13.945 2.93 5.684 2.93 8.555 8.672 2.93 5.684 2.93 14.004 0 5.859-1.934 10.723-1.933 4.804-5.625 8.203-3.691 3.34-8.965 4.98l-2.929 1.23h-21.27l-.117-9.198H99.55q4.921 0 8.203-2.11 3.28-2.168 4.922-5.8 1.64-3.634 1.64-8.028 0-4.922-1.464-8.613-1.466-3.692-4.688-5.684-3.163-2.05-8.496-2.05H86.602V112H75.82zM116.777 112 99.785 73.328l11.192-.059 17.343 38.028V112zM195 61.96v14.825q0 9.024-1.992 15.88-1.934 6.795-5.684 11.366t-9.023 6.856-11.895 2.285q-6.387 0-11.66-2.285t-9.082-6.856-5.918-11.367q-2.05-6.855-2.051-15.879V61.961q0-9.025 2.051-15.82 2.05-6.856 5.859-11.426t9.083-6.856q5.273-2.343 11.66-2.343 6.621 0 11.894 2.343 5.333 2.286 9.024 6.856 3.75 4.57 5.742 11.426Q195 52.936 195 61.96m-10.664 14.825V61.844q0-7.032-1.172-12.07-1.172-5.098-3.457-8.32-2.284-3.224-5.625-4.747-3.34-1.582-7.734-1.582-4.161 0-7.5 1.582-3.282 1.524-5.625 4.746t-3.633 8.32q-1.23 5.04-1.231 12.07v14.942q0 7.09 1.231 12.188 1.289 5.039 3.633 8.32 2.401 3.222 5.742 4.805 3.34 1.523 7.441 1.523 4.395 0 7.735-1.523 3.398-1.583 5.625-4.805 2.285-3.281 3.398-8.32 1.172-5.098 1.172-12.188m73.242 26.016V112h-37.031v-9.199zM222.48 26.688V112h-10.781V26.688zm30.118 36.68v9.198h-32.051v-9.199zm4.394-36.68v9.257h-36.445v-9.257zm43.828 60.41v-60.41h10.723v60.41q0 8.437-2.93 14.238-2.93 5.8-8.144 8.848-5.157 2.988-11.895 2.988-6.62 0-11.836-2.695-5.215-2.696-8.203-8.204-2.93-5.507-2.93-13.886h10.782q0 5.391 1.582 8.847 1.64 3.457 4.394 5.098t6.211 1.641q3.516 0 6.27-1.875 2.754-1.934 4.336-5.684 1.64-3.809 1.64-9.316m71.25-2.227h10.782q-.41 8.79-3.575 15.176-3.105 6.329-9.082 9.726-5.917 3.399-14.824 3.399-6.387 0-11.543-2.52t-8.848-7.207q-3.632-4.746-5.566-11.367t-1.934-14.883V61.434q0-8.204 1.934-14.825 1.992-6.62 5.684-11.308 3.75-4.746 9.082-7.266 5.39-2.52 12.187-2.52 8.32 0 14.063 3.34 5.8 3.282 8.906 9.668 3.163 6.33 3.516 15.528H372.07q-.41-6.739-2.109-10.957-1.7-4.278-5.039-6.27-3.281-2.05-8.555-2.05-4.688 0-8.144 1.874-3.399 1.875-5.625 5.391-2.168 3.458-3.282 8.379-1.054 4.863-1.054 10.898v15.88q0 5.624.879 10.488.937 4.863 2.929 8.554 2.052 3.633 5.332 5.684 3.282 2.05 7.969 2.051 5.917 0 9.375-1.934 3.457-1.934 5.098-6.152 1.7-4.22 2.226-11.016m51.035-58.183V112h-10.664V26.688zm22.442 0v9.257h-55.488v-9.257zm48.984 63.75q0-2.989-.703-5.274-.703-2.344-2.461-4.219-1.757-1.875-4.922-3.574-3.164-1.7-8.027-3.457-5.274-1.875-9.551-4.16-4.277-2.344-7.324-5.332a21.5 21.5 0 0 1-4.629-6.856q-1.641-3.867-1.641-8.847t1.7-9.2q1.758-4.218 4.922-7.324 3.222-3.165 7.734-4.922t10.078-1.757q8.32 0 14.004 3.691 5.742 3.633 8.672 9.55 2.93 5.86 2.929 12.54h-10.781q0-4.804-1.582-8.496-1.523-3.75-4.804-5.86-3.223-2.168-8.438-2.168-4.687 0-7.734 1.817-2.99 1.815-4.453 4.922-1.407 3.105-1.407 7.09 0 2.694.938 4.921.938 2.169 2.871 4.043 1.992 1.876 4.922 3.457 2.988 1.582 7.031 3.047 6.27 2.051 10.723 4.57 4.452 2.52 7.265 5.684a19.3 19.3 0 0 1 4.102 7.09q1.347 3.926 1.347 8.906 0 5.215-1.757 9.434-1.7 4.219-4.981 7.207t-7.91 4.629q-4.628 1.582-10.43 1.582-5.039 0-9.902-1.641a27.2 27.2 0 0 1-8.73-4.922q-3.926-3.28-6.27-8.086-2.344-4.863-2.344-11.25h10.782q0 4.395 1.289 7.559 1.288 3.106 3.574 5.156a14.9 14.9 0 0 0 5.215 3.047q2.988.938 6.386.938 4.688 0 7.852-1.641 3.222-1.64 4.805-4.687 1.64-3.048 1.64-7.207M0 123.719h388.184v5.859H0zm386.484 0h62.461v5.859h-62.461zm61.524 0h62.226v5.859h-62.226z" fill="#2E2E2E"/><path d="M40.387 82.543H21.754v-9.2h18.633q5.273 0 8.496-2.109 3.281-2.109 4.746-5.859 1.523-3.75 1.523-8.555 0-4.395-1.523-8.261-1.466-3.868-4.746-6.211-3.223-2.403-8.496-2.403H23.98V116H13.199V30.688h27.188q8.262 0 13.945 3.34 5.684 3.34 8.613 9.257 2.989 5.86 2.989 13.418 0 8.203-2.989 14.004-2.93 5.8-8.613 8.848-5.683 2.988-13.945 2.988M79.82 30.687h23.848q8.32 0 13.945 2.93 5.684 2.93 8.555 8.672 2.93 5.684 2.93 14.004 0 5.859-1.934 10.723-1.933 4.804-5.625 8.203-3.691 3.34-8.965 4.98l-2.929 1.23h-21.27l-.117-9.198h15.293q4.921 0 8.203-2.11 3.28-2.168 4.922-5.8 1.64-3.634 1.64-8.028 0-4.922-1.464-8.613-1.466-3.692-4.688-5.684-3.163-2.05-8.496-2.05H90.602V116H79.82zM120.777 116l-16.992-38.672 11.192-.059 17.343 38.028V116zM199 65.96v14.825q0 9.024-1.992 15.88-1.934 6.795-5.684 11.366t-9.023 6.856-11.895 2.285q-6.387 0-11.66-2.285t-9.082-6.856-5.918-11.367q-2.05-6.855-2.051-15.879V65.961q0-9.024 2.051-15.82 2.05-6.856 5.859-11.426t9.083-6.856q5.273-2.343 11.66-2.343 6.621 0 11.894 2.343 5.333 2.286 9.024 6.856 3.75 4.57 5.742 11.426Q199 56.936 199 65.96m-10.664 14.825V65.844q0-7.032-1.172-12.07-1.172-5.098-3.457-8.32-2.284-3.224-5.625-4.747-3.34-1.582-7.734-1.582-4.161 0-7.5 1.582-3.282 1.524-5.625 4.746t-3.633 8.32q-1.23 5.04-1.231 12.07v14.942q0 7.09 1.231 12.188 1.289 5.039 3.633 8.32 2.401 3.222 5.742 4.805 3.34 1.523 7.441 1.523 4.395 0 7.735-1.523 3.398-1.583 5.625-4.805 2.285-3.281 3.398-8.32 1.172-5.098 1.172-12.188m73.242 26.016V116h-37.031v-9.199zM226.48 30.688V116h-10.781V30.688zm30.118 36.68v9.198h-32.051v-9.199zm4.394-36.68v9.257h-36.445v-9.257zm43.828 60.41v-60.41h10.723v60.41q0 8.437-2.93 14.238-2.93 5.8-8.144 8.848-5.157 2.988-11.895 2.988-6.62 0-11.836-2.695-5.215-2.696-8.203-8.204-2.93-5.507-2.93-13.886h10.782q0 5.391 1.582 8.847 1.64 3.457 4.394 5.098t6.211 1.641q3.516 0 6.27-1.875 2.754-1.934 4.336-5.684 1.64-3.809 1.64-9.316m71.25-2.227h10.782q-.41 8.79-3.575 15.176-3.105 6.329-9.082 9.726-5.917 3.399-14.824 3.399-6.387 0-11.543-2.52t-8.848-7.207q-3.632-4.746-5.566-11.367t-1.934-14.883V65.434q0-8.204 1.934-14.825 1.992-6.62 5.684-11.308 3.75-4.746 9.082-7.266 5.39-2.52 12.187-2.52 8.32 0 14.063 3.34 5.8 3.282 8.906 9.668 3.163 6.33 3.516 15.528H376.07q-.41-6.739-2.109-10.957-1.7-4.278-5.039-6.27-3.281-2.05-8.555-2.05-4.688 0-8.144 1.874-3.399 1.875-5.625 5.391-2.168 3.458-3.282 8.379-1.054 4.863-1.054 10.898v15.88q0 5.624.879 10.488.937 4.863 2.929 8.554 2.052 3.633 5.332 5.684 3.282 2.05 7.969 2.051 5.917 0 9.375-1.934 3.457-1.934 5.098-6.152 1.7-4.22 2.226-11.016m51.035-58.183V116h-10.664V30.688zm22.442 0v9.257h-55.488v-9.257zm48.984 63.75q0-2.989-.703-5.274-.703-2.344-2.461-4.219-1.757-1.875-4.922-3.574-3.164-1.7-8.027-3.457-5.274-1.875-9.551-4.16-4.277-2.344-7.324-5.332a21.5 21.5 0 0 1-4.629-6.856q-1.641-3.867-1.641-8.847t1.7-9.2q1.758-4.218 4.922-7.324 3.222-3.165 7.734-4.922t10.078-1.757q8.32 0 14.004 3.691 5.742 3.633 8.672 9.55 2.93 5.86 2.929 12.54h-10.781q0-4.804-1.582-8.496-1.523-3.75-4.804-5.86-3.223-2.168-8.438-2.168-4.687 0-7.734 1.817-2.99 1.815-4.453 4.922-1.407 3.105-1.407 7.09 0 2.694.938 4.921.938 2.169 2.871 4.043 1.992 1.876 4.922 3.457 2.988 1.582 7.031 3.047 6.27 2.051 10.723 4.57 4.452 2.52 7.265 5.684a19.3 19.3 0 0 1 4.102 7.09q1.347 3.926 1.347 8.906 0 5.215-1.757 9.434-1.7 4.218-4.981 7.207t-7.91 4.629q-4.628 1.582-10.43 1.582-5.039 0-9.902-1.641a27.2 27.2 0 0 1-8.73-4.922q-3.926-3.28-6.27-8.086-2.344-4.863-2.344-11.25h10.782q0 4.395 1.289 7.559 1.288 3.105 3.574 5.156a14.9 14.9 0 0 0 5.215 3.047q2.988.938 6.386.938 4.688 0 7.852-1.641 3.222-1.64 4.805-4.687 1.64-3.048 1.64-7.207M4 127.719h388.184v5.859H4zm386.484 0h62.461v5.859h-62.461zm61.524 0h62.226v5.859h-62.226z" fill="#B1EE04"/><path d="M44.387 78.543H25.754v-9.2h18.633q5.273 0 8.496-2.109 3.281-2.109 4.746-5.859 1.523-3.75 1.523-8.555 0-4.395-1.523-8.261-1.466-3.868-4.746-6.211-3.223-2.403-8.496-2.403H27.98V112H17.199V26.688h27.188q8.262 0 13.945 3.34 5.684 3.34 8.613 9.257 2.99 5.86 2.989 13.418 0 8.203-2.989 14.004-2.93 5.8-8.613 8.848-5.683 2.988-13.945 2.988M83.82 26.687h23.848q8.32 0 13.945 2.93 5.684 2.93 8.555 8.672 2.93 5.684 2.93 14.004 0 5.859-1.934 10.723-1.933 4.804-5.625 8.203-3.691 3.34-8.965 4.98l-2.929 1.23h-21.27l-.117-9.198h15.293q4.921 0 8.203-2.11 3.28-2.168 4.922-5.8 1.64-3.634 1.64-8.028 0-4.922-1.464-8.613-1.466-3.692-4.688-5.684-3.163-2.05-8.496-2.05H94.602V112H83.82zM124.777 112l-16.992-38.672 11.192-.059 17.343 38.028V112zM203 61.96v14.825q0 9.024-1.992 15.88-1.934 6.795-5.684 11.366t-9.023 6.856-11.895 2.285q-6.387 0-11.66-2.285t-9.082-6.856-5.918-11.367q-2.05-6.855-2.051-15.879V61.961q0-9.025 2.051-15.82 2.05-6.856 5.859-11.426t9.083-6.856q5.273-2.343 11.66-2.343 6.621 0 11.894 2.343 5.333 2.286 9.024 6.856 3.75 4.57 5.742 11.426Q203 52.936 203 61.96m-10.664 14.825V61.844q0-7.032-1.172-12.07-1.172-5.098-3.457-8.32-2.284-3.224-5.625-4.747-3.34-1.582-7.734-1.582-4.161 0-7.5 1.582-3.282 1.524-5.625 4.746t-3.633 8.32q-1.23 5.04-1.231 12.07v14.942q0 7.09 1.231 12.188 1.289 5.039 3.633 8.32 2.401 3.222 5.742 4.805 3.34 1.523 7.441 1.523 4.395 0 7.735-1.523 3.398-1.583 5.625-4.805 2.285-3.281 3.398-8.32 1.172-5.098 1.172-12.188m73.242 26.016V112h-37.031v-9.199zM230.48 26.688V112h-10.781V26.688zm30.118 36.68v9.198h-32.051v-9.199zm4.394-36.68v9.257h-36.445v-9.257zm43.828 60.41v-60.41h10.723v60.41q0 8.437-2.93 14.238-2.93 5.8-8.144 8.848-5.157 2.988-11.895 2.988-6.62 0-11.836-2.695-5.215-2.696-8.203-8.204-2.93-5.507-2.93-13.886h10.782q0 5.391 1.582 8.847 1.64 3.457 4.394 5.098t6.211 1.641q3.516 0 6.27-1.875 2.754-1.934 4.336-5.684 1.64-3.809 1.64-9.316m71.25-2.227h10.782q-.41 8.79-3.575 15.176-3.105 6.329-9.082 9.726-5.917 3.399-14.824 3.399-6.387 0-11.543-2.52t-8.848-7.207q-3.632-4.746-5.566-11.367t-1.934-14.883V61.434q0-8.204 1.934-14.825 1.992-6.62 5.684-11.308 3.75-4.746 9.082-7.266 5.39-2.52 12.187-2.52 8.32 0 14.063 3.34 5.8 3.282 8.906 9.668 3.163 6.33 3.516 15.528H380.07q-.41-6.739-2.109-10.957-1.7-4.278-5.039-6.27-3.281-2.05-8.555-2.05-4.688 0-8.144 1.874-3.399 1.875-5.625 5.391-2.168 3.458-3.282 8.379-1.054 4.863-1.054 10.898v15.88q0 5.624.879 10.488.937 4.863 2.929 8.554 2.052 3.633 5.332 5.684 3.282 2.05 7.969 2.051 5.917 0 9.375-1.934 3.457-1.934 5.098-6.152 1.7-4.22 2.226-11.016m51.035-58.183V112h-10.664V26.688zm22.442 0v9.257h-55.488v-9.257zm48.984 63.75q0-2.989-.703-5.274-.703-2.344-2.461-4.219-1.757-1.875-4.922-3.574-3.164-1.7-8.027-3.457-5.274-1.875-9.551-4.16-4.277-2.344-7.324-5.332a21.5 21.5 0 0 1-4.629-6.856q-1.641-3.867-1.641-8.847t1.7-9.2q1.758-4.218 4.922-7.324 3.222-3.165 7.734-4.922t10.078-1.757q8.32 0 14.004 3.691 5.742 3.633 8.672 9.55 2.93 5.86 2.929 12.54h-10.781q0-4.804-1.582-8.496-1.523-3.75-4.804-5.86-3.223-2.168-8.438-2.168-4.687 0-7.734 1.817-2.99 1.815-4.453 4.922-1.407 3.105-1.407 7.09 0 2.694.938 4.921.938 2.169 2.871 4.043 1.992 1.876 4.922 3.457 2.988 1.582 7.031 3.047 6.27 2.051 10.723 4.57 4.452 2.52 7.265 5.684a19.3 19.3 0 0 1 4.102 7.09q1.347 3.926 1.347 8.906 0 5.215-1.757 9.434-1.7 4.219-4.981 7.207t-7.91 4.629q-4.628 1.582-10.43 1.582-5.039 0-9.902-1.641a27.2 27.2 0 0 1-8.73-4.922q-3.926-3.28-6.27-8.086-2.344-4.863-2.344-11.25h10.782q0 4.395 1.289 7.559 1.288 3.106 3.574 5.156a14.9 14.9 0 0 0 5.215 3.047q2.988.938 6.386.938 4.688 0 7.852-1.641 3.222-1.64 4.805-4.687 1.64-3.048 1.64-7.207M8 123.719h388.184v5.859H8zm386.484 0h62.461v5.859h-62.461zm61.524 0h62.226v5.859h-62.226z" fill="#2E2E2E"/></svg>
        </div>
      <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:15}}>

        <ProjectBox 
        title='thescene - Digital business cards management website for artists and musicians' 

        content='Created an online platform where artists around the world can create and 
        share digital business cards. These cards act as a way to standardise how artists 
        communicate with business. The platform also handles verification of information that
        users submits via an admin process. The site handles users from around the world thanks 
        to AWS services and handles payment from anywhere with any currency using Stripe Payment API'
        tags={['Stripe','Python','Typescript','NextJS','React','Fastapi', 'Json Web Tokens (JWT)', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI']}
        link='https://thescene.io/vanquan'
        imgname={TheSceneImg}
        details={{
          detailText: 'Below depicts the system architecture and database schema for this project. For this project I used NextJS with Typescript on the frontend, Python with FastAPI on the serverside to handle all incomming API requests from the frontend and furthermore Postgresql for the database. To assist with this stack I incorporated AWS sevices such as S3 Bucket to hold all images the user would edit and upload to the system, and redis to handle caching of user information and JWT tokens. ',
          sysDiagram: PATH_TO_SVGS + 'thescene.sysdiagram.svg',
          schemaDiagram: PATH_TO_SVGS + 'thescene.schema.svg'
        }}
        />
        <ProjectBox 
        title='Warwick Band Society Room Booking System And Interface' 

        content='Crafted a user-friendly online booking system and interface for the Warwick 
        Band Society, increasing the termly profits by 80% whilst greatly reducing the time it 
        takes to book. The system handles both booking and payments, automatically forwarding all
        payments to the society, to achieve this I used Stripe, a payment processing solution.
        Incorperated industry wide best practices for securely holding users private information such
        as salting, hashing and encryption. Furthermore I used JSON Web Tokens (JWT) to maintain stateful
        sessions. All components of this project is hosted on corresponding Amazon Web Service (AWS) services, 
        noted in the tags below. Finally Docker was used to containerize each component to work within
        AWS easily. Note that this project as of August 2024 has been deprecated, a simulation of the project is still running '
        tags={['Stripe','Python','Typescript','React','Fastapi', 'Json Web Tokens (JWT)','Redis Cache', 'Postgresql', 'AWS EC2', 'AWS RDBMS', 'AWS ElastiCache','Docker', 'RestAPI']}
        link='https://bandsoc.ramizabdulla.me'
        imgname={BandSocImg}
          details={{
            schemaDiagram: PATH_TO_SVGS + 'bandsoc.schema.svg',
            detailText:'For this project we decided to keep the architecture simple as it will only be service a small group of people, the band society. The frontend comrpises of a single page application (SPA) using ReactJS with Vite. The backend comprises of four main services: The API we run using Python\'s FastAPI library (REST API), The database holding all the bookings and user information, Amazon\'s Simple Email Service for email verifcation, Redis Cache for user caching and instant revoking of JWT tokens and finally the Stripe Payment API to handle user transactions',
            sysDiagram: PATH_TO_SVGS + 'bandsoc.sysdiagram.svg'
          }}

        />
        <ProjectBox
        title='Start Page Browser Extension For Interview Tracking and Leetcode Progression'
        content='Designed and implemented a browser start page extension for Firefox and Chrome using React
        enhancing user productivity. Integrated a reverse proxy using Nginx to allow API request to be made
        from the clients browser to Leetcodes GraphQL API. Currently leettab serves more that a hundred daily 
        active users.'
        tags={['Browser Extension','Typescript','Nginx','graphQL','React']}
        link='https://leettab.boraakyuz.me/'
        imgname={LeetTab}
        />
                <ProjectBox
        title='SignLink - Sign Language Android Application'
        content='Created an android application that allows users to learn American Sign Language (asl) through
        quizes and exams. Incorporated an algorithm that maximises user retention from the quizs, this was created
        through continuous testing from a group of particpants. This algorithm uses a double queue system to determine
        which quiz popup should be displayed to the user next. Furthermore this project uses Java Spring Boot on the backend
        to host the endpoint that are frequently made. This was chosen due to the robustness of Java and its very easy to use
        unit testing libraries. Finally Googles login API was also used in project to allow users to more easily create
        an account via the login with google button. This project also incorporates a dictionary of sign to word translation
        pairings, of which has more than five hundred words. This was achieved by web scraping datasets of these pairings online'
        tags={['Android Development','Java','Spring Boot','Postgresql','Typescript','Web Scraping','Python']}
        imgname={SignLink}
        github='https://github.com/firozt/signlink'
        details={{
          detailText:'For this project I decided to incorporate google login auth for easy user logins. This google API uses the OUATH2 standard for API security, which is an industry standard for these types of services. For the server architecture I opted to use a microservice structure incorporating the Model View Controller (MVC) design pattern, greatly encouraged by the Java Spring Boot documentation. One service handles all of the API request from the client, of which is then broken down to even more microservices, one for user auth, courses information request and user course relations. Another server service is the python scraping server. This server is used periodically to scrape information from the web and store in my SQL database, which other services will use. I decided to use a cloud storage software to store images, as there are over hundreds images in this project. To use these images I saved the URI to display them in my Postgres database. Lastly I chose to use ReactNative as it will allow me the freedom in the future to enable IOS support, unlike single platform frameworks such as swift or kotlin. ',
          sysDiagram: PATH_TO_SVGS + 'signlink.sysdiagram.svg',
          schemaDiagram: PATH_TO_SVGS + 'signlink.schema.svg'
        }}
        extraDetail={[
          {
            title:'Screen Flow Diagram',
            subtext:'Below shows all the screens the user interacts with and how a user would enter that screen. This image was from the desgin phase of the project. The control flow was inspired from similar applications such as Memrise and Duolingo',
            image: PATH_TO_SVGS + 'signlink.controlflow.svg'
          }
        ]}
        />
        <ProjectBox
        title='Compiler for Classroom Object Oriented Language (COOL)'
        content='Designed and implemented a compiler using the ANTLR 4 Java framework. This project implements
        the skills ive learnt throughout the entirity of my degree, from Algorithms to Automata and Formal Languages.
        This project also let me delve, more thoroughly into low level programming. The compiler takes as input valid COOL
        syntax code and outputs a mips file that can be ran on any cpu that can understand and compute mips code. COOL is a 
        language developed by the University of Standford, whose main purpose is to develop compilers for as it is a basic
        OOP language without many of the bells and whistles in modern OOP languages such as Java'
        tags={['Automata and Formal Lanugages','Context Free Grammars','Java','ANTLR 4','Low Level Programing (ASM)','MIPS','Syntax detection','Data structures']}
        imgname={CompilerImg}
        github='https://github.com/firozt/Object-Oriented-Language-Compiler'
        />
        <ProjectBox
        title='CIFAR-10 Dataset Convolutional Neural Network Recognition Model'
        content='Designed and trained a model from scratch using Pythons Pytorch Framework. The model is a softmax
        classifier model that takes in an image as input and outputs to ten distinct classes. The model uses a CNN
        architecture with 6 CNN layers, 3 layer multiperceptron classifier, with multiple pooling layers throughout. The model ended with 89% accuracy after 90 epochs.'
        tags={['Convolutional Neural Networks','Machine Learning','Training Models','CIFAR-10 Dataset','Pytorch']}
        imgname={MachineLearning}
        github='https://github.com/firozt/CIFAR-10-CNN-Model'
        details={{
          detailText: 'The architecture first defines a block, shown below, using 7 convolutions, and a series of linear and multi layer perceptrons. The output of a block is the matrix multiplication of the these two values, which a softmax activation function is then used. To prevent model overfitting, i added a residual connection by adding the original input \'x\' to the output of each block, inspired by the research from the ResNet model. The architecture repeats this 7 times whilst also applying various pooling methods to reduce dimensionality, which also helps with training time. ADAM optimizer was used to train this model. The hyperparameters used for training are the following: Learning Rate = 0.002 (ADAM OPTIMZER), \nLoss function = CrossEntropyLoss, \nWeight Decay = 1e-5.',
          sysDiagram: PATH_TO_SVGS + 'ml.diagram.svg'
        }}
        backgroundColor="white"
        extraDetail={[
          {
            title:'Training Accuracy Logs',
            subtext:'Below shows the graphs for both training loss, test data accuracy and train data accuarcy over 70 epochs.',
            image: PATH_TO_SVGS + 'ml.graphs.png'
          }
        ]}
        />
        <ProjectBox 
        title='Discord Bot For Displaying Video Game Statistics'
        content='Developed a Discord bot using Discords python software development kit. Furthermore utilised
        Riot Games API (game company) for quering user statstics. Implemented a server caching mechanism to 
        cache repeated API queries, this was an important part of the project as the API used was very limiting
        in the number of API request allowed to make per minute. The caching algorithm would cache the most frequented
        made request whilst also taking into consideration the likelihood of making the same request again.'
        tags={['Python','Caching','Discord API','Riot Games API','Botting']}
        imgname={DiscordBot}
        github='https://github.com/firozt/DiscordBot/'
        />
        </div>
        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}
