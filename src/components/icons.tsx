import { SVGProps } from "react";

export const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect fill="none" height={256} width={256} />
      <path
        d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        stroke="currentColor"
        fill="none"
      />
    </svg>
  );

export const AddPostIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <style>{".cls-1{fill:none;}"}</style>
    </defs>
    <title />
    <g data-name="Layer 2" id="Layer_2">
      <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
      <path d="M16,23a1,1,0,0,1-1-1V10a1,1,0,0,1,2,0V22A1,1,0,0,1,16,23Z" />
      <path d="M22,17H10a1,1,0,0,1,0-2H22a1,1,0,0,1,0,2Z" />
    </g>
    <g id="frame">
      <rect className="cls-1" height={32} width={32} />
    </g>
  </svg>
);
export const MyPostsIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
      <style>{".cls-1{fill:none;}"}</style>
    </defs>
      <polygon
        points="128 160 96 160 96 128 192 32 224 64 128 160"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
        x1={168}
        x2={200}
        y1={56}
        y2={88}
      />
      <path
        d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  );

  export const MySavesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width={256} height={256} fill="none" />
      <path
        d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
      <path
        d="M88,64V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8V192l-32-22.85"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      />
    </svg>
  );
  
  export const LightIcon = (props: SVGProps<SVGSVGElement>) => (<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  role="img"
  {...props}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
  ></path>
</svg>)

export const DarkIcon = (props: SVGProps<SVGSVGElement>) => (<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  {...props}
  role="img"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
  ></path>
</svg>)

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => (
<svg
xmlns="http://www.w3.org/2000/svg"
{...props}
viewBox="0 0 512 512"
>
<path
  d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
  fill="none"
  stroke="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth="40"
/>
<path
  d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
  fill="none"
  stroke="currentColor"
  strokeMiterlimit="10"
  strokeWidth="40"
/>
</svg>);

// export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     x="0px"
//     y="0px"
//     viewBox="0 0 256 256"
//     enableBackground="new 0 0 256 256"
//     xmlSpace="preserve"
//     {...props}
//   >
//     <g>
//       <g>
//         <path
//           fill="currentColor"
//           d="M157.5,246H19.8c-5.9,0-9.8-3.9-9.8-9.8V19.8c0-5.9,3.9-9.8,9.8-9.8h137.7c5.9,0,9.8,3.9,9.8,9.8v68.8c0,5.9-3.9,9.8-9.8,9.8s-9.8-3.9-9.8-9.8v-59h-118v196.7h118v-59c0-5.9,3.9-9.8,9.8-9.8s9.8,3.9,9.8,9.8v68.8C167.3,242.1,163.4,246,157.5,246z"
//         />
//         <path
//           fill="currentColor"
//           d="M236.2,137.8H88.7c-5.9,0-9.8-3.9-9.8-9.8c0-5.9,3.9-9.8,9.8-9.8h147.5c5.9,0,9.8,3.9,9.8,9.8C246,133.9,242.1,137.8,236.2,137.8z"
//         />
//         <path
//           fill="currentColor"
//           d="M236.2,137.8c-3,0-4.9-1-6.9-3L190,95.6c-3.9-3.9-3.9-9.8,0-13.8c3.9-3.9,9.8-3.9,13.8,0l39.3,39.3c3.9,3.9,3.9,9.8,0,13.8C241.1,136.9,239.1,137.8,236.2,137.8z"
//         />
//         <path
//           fill="currentColor"
//           d="M196.8,177.2c-3,0-4.9-1-6.9-3c-3.9-3.9-3.9-9.8,0-13.8l39.3-39.3c3.9-3.9,9.8-3.9,13.8,0c3.9,3.9,3.9,9.8,0,13.8l-39.3,39.3C201.8,176.2,199.8,177.2,196.8,177.2z"
//         />
//       </g>
//     </g>
//   </svg>
// );
export const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 67 67"
    // style={{
    //   enableBackground: "new 0 0 67 67",
    // }}
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <path d="M65.25,33c0-1.104-0.896-2-2-2H24.838l8.511-8.32c0.781-0.781,0.781-1.952,0-2.733c-0.78-0.781-2.047-0.734-2.828,0.047 L17.707,32.832c-0.375,0.375-0.586,0.896-0.586,1.426s0.211,1.045,0.586,1.42l12.815,12.815c0.391,0.391,0.902,0.587,1.414,0.587 c0.512,0,1.024-0.194,1.415-0.585c0.781-0.781,0.781-2.237,0-3.018L23.062,35H63.25C64.354,35,65.25,34.104,65.25,33z" />
        <path d="M45.75,59.281v-11.9c0-1.104-0.896-2-2-2c-1.104,0-2,0.896-2,2v11.9c0,2.691-2.036,3.719-4.541,3.719H11.208 C8.82,63,5.75,62.098,5.75,59.281V9.541C5.75,6.841,8.613,4,11.208,4h26.001c2.592,0,4.541,2.889,4.541,5.541v11.84 c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2V9.541C45.75,4.661,42.025,0,37.209,0H11.208C6.436,0,1.75,4.661,1.75,9.541v49.74 C1.75,63.898,6.101,67,11.208,67h26.001C42.363,67,45.75,63.898,45.75,59.281z" />
      </g>
      <svg {...props} />
    </g>
  </svg>
);
// export const SignupIcon = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlnsXlink="http://www.w3.org/1999/xlink"
//     x="0px"
//     y="0px"
//     viewBox="0 0 256 256"
//     enableBackground="new 0 0 256 256"
//     xmlSpace="preserve"
//     {...props}
//   >
//     <g>
//       <g>
//         <path
//         stroke="currentColor"
//           d="M211.3,217.1c0,11.2-9.1,20.4-20.4,20.4H48.2c-11.3,0-20.4-9.1-20.4-20.4V38.8c0-11.2,9.1-20.4,20.4-20.4h98V0.7H33.7C20.6,0.7,10,11.3,10,24.4v207.2c0,13.1,10.6,23.7,23.7,23.7h171.7c13.1,0,23.7-10.6,23.7-23.7V119.1h-17.8V217.1L211.3,217.1z M70.2,196.1L246,20.2L233.4,7.7L57.6,183.5L70.2,196.1z"
//         />
//       </g>
//     </g>
//   </svg>
// );
export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 67 67"
    fill="currentColor"
    stroke="currentColor"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
      <path d="M17.75,33c0-1.104,0.896-2,2-2h38.412l-8.511-8.32c-0.781-0.781-0.781-1.952,0-2.733c0.78-0.781,2.047-0.734,2.828,0.047    l12.814,12.838c0.375,0.375,0.586,0.896,0.586,1.426s-0.211,1.045-0.586,1.42L52.479,48.493c-0.391,0.391-0.902,0.587-1.414,0.587    c-0.512,0-1.024-0.194-1.415-0.585c-0.781-0.781-0.781-2.237,0-3.018L59.938,35H19.75C18.646,35,17.75,34.104,17.75,33z"/>

        <path d="M45.75,59.281v-11.9c0-1.104-0.896-2-2-2c-1.104,0-2,0.896-2,2v11.9c0,2.691-2.036,3.719-4.541,3.719H11.208 C8.82,63,5.75,62.098,5.75,59.281V9.541C5.75,6.841,8.613,4,11.208,4h26.001c2.592,0,4.541,2.889,4.541,5.541v11.84 c0,1.104,0.896,2,2,2c1.104,0,2-0.896,2-2V9.541C45.75,4.661,42.025,0,37.209,0H11.208C6.436,0,1.75,4.661,1.75,9.541v49.74 C1.75,63.898,6.101,67,11.208,67h26.001C42.363,67,45.75,63.898,45.75,59.281z" />
      </g>
      <svg {...props} />
    </g>
  </svg>
);

export const SignupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve"
    style={{transform: `scaleX(80%)`}}
    {...props}
  >
    <g>
      <g>
        <path
          // fill="#000000"
          d="M229.9,81c-5.3,0-9.7,4.3-9.7,9.7v113.5c0,6.1-2.3,11.8-6.6,16.1c-4.3,4.3-10,6.7-16,6.7H52c-6,0-11.8-2.4-16-6.7c-4.3-4.3-6.6-10-6.6-16.1v-146c0-6.1,2.3-11.8,6.6-16.1c4.3-4.3,10-6.6,16-6.6h113.3c5.3,0,9.7-4.3,9.7-9.7c0-5.4-4.4-9.7-9.7-9.7H52c-11.2,0-21.8,4.4-29.7,12.4C14.4,36.4,10,47,10,58.2v146c0,11.3,4.4,21.8,12.3,29.8c7.9,8,18.5,12.4,29.7,12.4h145.6c11.2,0,21.8-4.4,29.7-12.4c7.9-7.9,12.3-18.5,12.3-29.8V90.7C239.6,85.3,235.3,81,229.9,81z M243.2,12.5c-3.8-3.8-9.9-3.8-13.7,0L116.3,126c-3.8,3.8-3.8,9.9,0,13.7c1.9,1.9,4.4,2.8,6.8,2.8c2.5,0,5-0.9,6.8-2.8L243.1,26.2C246.9,22.4,246.9,16.3,243.2,12.5z"
        />
      </g>
    </g>
  </svg>
);