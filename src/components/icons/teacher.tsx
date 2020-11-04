import * as React from "react";

export interface IProps {
  width?: number;
  height?: number;
}

function Teacher({ height = 50, width = 50 }: IProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 1000 1000">
      <path
        d="M463.09 16.83c-25.44 2.87-57.95 11.67-78.42 21.61-68.47 32.9-108.63 96.78-123.94 197.19-6.12 39.59-6.12 108.63-.19 143.44 13.59 79.18 44.76 157.97 84.35 213.25 46.86 65.6 106.72 99.84 165.44 94.67 69.62-5.93 129.1-56.23 175.96-148.22 43.61-85.3 63.3-176.72 56.8-261.06-11.86-150.33-77.08-237.73-192.6-258.2-21.42-3.64-65.41-5.17-87.4-2.68zM668.5 740.92c-63.69 63.69-158.74 85.68-244.81 56.8-35.57-11.86-66.18-30.6-94.86-58.33l-13.39-12.81-28.69 8.22C132.02 779.37 39.65 836.17 16.5 900.81c-4.4 12.43-4.97 17.21-5.74 48.58l-.77 35h980l-.77-35.96c-.96-39.02-2.3-45.14-15.3-69.81-8.99-17.21-39.21-46.86-65.6-64.26-35-23.14-86.45-47.05-140.57-65.03-22.57-7.65-82.81-25.44-83.01-24.67-.18.2-7.45 7.47-16.24 16.26z"
        fill="#6c63ff"
      />
    </svg>
  );
}

export default Teacher;
