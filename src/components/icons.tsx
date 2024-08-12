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
export const LogoutIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 256 256"
    enableBackground="new 0 0 256 256"
    xmlSpace="preserve"
    {...props}
  >
    <g>
      <g>
        <path
          fill="currentColor"
          d="M157.5,246H19.8c-5.9,0-9.8-3.9-9.8-9.8V19.8c0-5.9,3.9-9.8,9.8-9.8h137.7c5.9,0,9.8,3.9,9.8,9.8v68.8c0,5.9-3.9,9.8-9.8,9.8s-9.8-3.9-9.8-9.8v-59h-118v196.7h118v-59c0-5.9,3.9-9.8,9.8-9.8s9.8,3.9,9.8,9.8v68.8C167.3,242.1,163.4,246,157.5,246z"
        />
        <path
          fill="currentColor"
          d="M236.2,137.8H88.7c-5.9,0-9.8-3.9-9.8-9.8c0-5.9,3.9-9.8,9.8-9.8h147.5c5.9,0,9.8,3.9,9.8,9.8C246,133.9,242.1,137.8,236.2,137.8z"
        />
        <path
          fill="currentColor"
          d="M236.2,137.8c-3,0-4.9-1-6.9-3L190,95.6c-3.9-3.9-3.9-9.8,0-13.8c3.9-3.9,9.8-3.9,13.8,0l39.3,39.3c3.9,3.9,3.9,9.8,0,13.8C241.1,136.9,239.1,137.8,236.2,137.8z"
        />
        <path
          fill="currentColor"
          d="M196.8,177.2c-3,0-4.9-1-6.9-3c-3.9-3.9-3.9-9.8,0-13.8l39.3-39.3c3.9-3.9,9.8-3.9,13.8,0c3.9,3.9,3.9,9.8,0,13.8l-39.3,39.3C201.8,176.2,199.8,177.2,196.8,177.2z"
        />
      </g>
    </g>
  </svg>
);