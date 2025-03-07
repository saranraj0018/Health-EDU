const Elements = ({
    Image, Heading, reviewnumber, Reviews
} : { Image: string, Heading: string, reviewnumber: string, Reviews: string }) => {
    return (
        <>
        <div className="space-y-4 rounded-3xl bg-white p-3">
            <div className="relative">
                <div className="flex justify-end space-x-2 absolute right-[5px] top-[5px]">
                    <div className="hover:bg-white p-2 rounded-full bg-[#e5edf07d] backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 22.23V20H5.616C5.15533 20 4.771 19.846 4.463 19.538C4.155 19.23 4.00067 18.8453 4 18.384V5.616C4 5.15533 4.15433 4.771 4.463 4.463C4.77167 4.155 5.156 4.00067 5.616 4H11V1.77H12V22.23H11ZM14.192 5V4H18.577C19.037 4 19.4213 4.15433 19.73 4.463C20.0387 4.77167 20.1927 5.156 20.192 5.616V18.385C20.192 18.845 20.038 19.2293 19.73 19.538C19.422 19.8467 19.0377 20.0007 18.577 20H14.192V19H18.577C18.7303 19 18.8713 18.936 19 18.808C19.1287 18.68 19.1927 18.5387 19.192 18.384V5.616C19.192 5.462 19.128 5.32067 19 5.192C18.872 5.06333 18.731 4.99933 18.577 5H14.192ZM14.192 12.5V11.5H17.692V12.5H14.192ZM14.192 9V8H17.692V9H14.192ZM7.5 16H11V15H7.5V16ZM7.5 12.5H11V11.5H7.5V12.5ZM7.5 9H11V8H7.5V9Z" fill="#02054D" />
                        </svg>
                    </div>
                    <div className="hover:bg-white p-2 rounded-full bg-[#e5edf07d] backdrop-blur-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <img src={Image} alt="" />
            </div>
            <h2 className="font-medium my-auto text-[17px]">{Heading}</h2>
            <div className="flex space-x-2 text-sm">
                <div className="px-1 py-1 rounded-full bg-gray-100 flex my-auto font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="me-1 my-auto">
                        <g clip-path="url(#clip0_4974_2261)">
                        <path d="M9.00041 14.195L3.71066 17.156L4.89191 11.21L0.441406 7.094L6.46166 6.38L9.00041 0.875L11.5392 6.38L17.5594 7.094L13.1089 11.21L14.2902 17.156L9.00041 14.195Z" fill="#FFBE3F"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4974_2261">
                        <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                    </svg>
                    {reviewnumber}
                </div>
                <div className="text-zinc-500 my-auto">
                    {Reviews}
                </div>
            </div>
            <div className="flex flex-wrap space-x-1 space-y-1">
                <div className="flex space-x-1 my-auto">
                    <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M4.22813 2.9806C5.01913 2.20542 6.08408 1.77373 7.19158 1.77932C8.29908 1.78491 9.35962 2.22735 10.1427 3.01047C10.9259 3.7936 11.3683 4.85415 11.3739 5.96164C11.3795 7.06914 10.9478 8.1341 10.1726 8.9251L7.95087 11.1468C7.7518 11.3459 7.48185 11.4576 7.20037 11.4576C6.9189 11.4576 6.64895 11.3459 6.44988 11.1468L4.22813 8.9251C3.43989 8.13678 2.99707 7.06764 2.99707 5.95285C2.99707 4.83806 3.43989 3.76892 4.22813 2.9806Z" stroke="#252525" stroke-width="0.707678" stroke-linejoin="round"/>
                            <path d="M7.20067 7.54511C8.08006 7.54511 8.79295 6.83223 8.79295 5.95284C8.79295 5.07345 8.08006 4.36057 7.20067 4.36057C6.32128 4.36057 5.6084 5.07345 5.6084 5.95284C5.6084 6.83223 6.32128 7.54511 7.20067 7.54511Z" stroke="#252525" stroke-width="0.707678" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="text-zinc-600 text-[10px]">
                        Chennai, Tamil Nadu
                    </div>
                </div>
                <div className="flex space-x-1 my-auto">
                    <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <circle cx="10.0006" cy="9.82335" r="9.19981" fill="#F6F6F6"/>
                            <path d="M9.80611 7.17347H14.2161L9.80611 4.02539L5.39607 7.17347H9.80611ZM14.6084 8.98072V12.2622H15.0174C15.1588 12.2622 15.2737 12.3775 15.2737 12.5193V13.8124C15.2737 13.9545 15.1588 14.0695 15.0174 14.0695H4.59513C4.45377 14.0695 4.33887 13.9542 4.33887 13.8124V12.5193C4.33887 12.3775 4.45377 12.2622 4.59513 12.2622H5.00414V8.98072H4.59513C4.45377 8.98072 4.33887 8.86546 4.33887 8.72364V7.43054C4.33887 7.33712 4.38844 7.25546 4.46281 7.21043L9.65403 3.50486C9.74045 3.44034 9.86205 3.43563 9.9545 3.50184L15.1497 7.2101L15.1504 7.21043C15.2268 7.25815 15.2717 7.33544 15.274 7.42584V7.43021V8.72331C15.274 8.86512 15.1591 8.98038 15.0178 8.98038H14.6087L14.6084 8.98072ZM12.8069 12.2622V8.98072H12.0073V12.2622H12.8069ZM13.3194 8.98072V12.2622H14.0959V8.98072H13.3194ZM10.2061 12.2622V8.98072H9.40647V12.2622H10.2061ZM10.7186 8.98072V12.2622H11.4951V8.98072H10.7186ZM7.60528 12.2622V8.98072H6.80567V12.2622H7.60528ZM8.1178 8.98072V12.2622H8.89395V8.98072H8.1178ZM5.51666 8.98072V12.2622H6.29315V8.98072H5.51666ZM14.7612 12.7764H14.3521H13.0631H11.751H10.462H9.14988H7.86087H6.54874H5.25973H4.85072V13.5553H14.7605V12.7764H14.7612ZM14.7612 7.68762H4.85139V8.46623H5.2604H6.54941H7.86154H9.15055H10.4627H11.7517H13.0638H14.3528H14.7618V7.68762H14.7612Z" fill="#252525"/>
                        </svg>                       
                    </div>
                    <div className="text-zinc-600 text-[10px]">
                        Ownership: Public/Government
                    </div>
                </div>
                <div className="flex space-x-1 my-auto">
                    <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M8.79195 5.18626H5.6074M8.79195 6.77854H5.6074M7.19968 9.96309L5.6074 8.37081H6.40354C6.82584 8.37081 7.23084 8.20306 7.52945 7.90445C7.82806 7.60584 7.99581 7.20083 7.99581 6.77854C7.99581 6.35624 7.82806 5.95124 7.52945 5.65263C7.23084 5.35402 6.82584 5.18626 6.40354 5.18626M11.9765 7.17661C11.9765 7.80391 11.8529 8.42507 11.6129 9.00462C11.3728 9.58417 11.021 10.1108 10.5774 10.5543C10.1338 10.9979 9.60724 11.3498 9.02769 11.5898C8.44814 11.8299 7.82698 11.9534 7.19968 11.9534C6.57238 11.9534 5.95122 11.8299 5.37167 11.5898C4.79211 11.3498 4.26552 10.9979 3.82195 10.5543C3.37838 10.1108 3.02652 9.58417 2.78647 9.00462C2.54641 8.42507 2.42285 7.80391 2.42285 7.17661C2.42285 5.90971 2.92612 4.69471 3.82195 3.79888C4.71778 2.90305 5.93278 2.39978 7.19968 2.39978C8.46657 2.39978 9.68157 2.90305 10.5774 3.79888C11.4732 4.69471 11.9765 5.90971 11.9765 7.17661Z" stroke="#252525" stroke-width="0.849213" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                     
                    </div>
                    <div className="text-zinc-600 text-[10px]">
                        Fees: 27,000 - 37,000
                    </div>
                </div>
                <div className="flex space-x-1 my-auto">
                    <div className="my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M11.3802 8.31774V10.5735C11.3802 11.1541 10.9625 11.6541 10.3866 11.7305C9.27895 11.8775 8.14896 11.9534 7.00146 11.9534C5.85396 11.9534 4.72398 11.8775 3.61629 11.7305C3.04041 11.6541 2.62271 11.1541 2.62271 10.5735V8.31774M11.3802 8.31774C11.5063 8.20821 11.6071 8.07271 11.6758 7.92053C11.7445 7.76836 11.7795 7.60311 11.7783 7.43615V5.42829C11.7783 4.85454 11.3707 4.35881 10.8033 4.27389C10.2021 4.18388 9.59789 4.11537 8.99181 4.06848M11.3802 8.31774C11.2773 8.40531 11.1573 8.47431 11.023 8.51942C9.72596 8.94979 8.36805 9.16843 7.00146 9.16695C5.59602 9.16695 4.24417 8.93925 2.97991 8.51942C2.84895 8.47586 2.72765 8.40737 2.62271 8.31774M2.62271 8.31774C2.49668 8.20821 2.39584 8.07271 2.32713 7.92053C2.25841 7.76836 2.22345 7.60311 2.22464 7.43615V5.42829C2.22464 4.85454 2.63226 4.35881 3.19964 4.27389C3.80083 4.18388 4.40504 4.11537 5.01112 4.06848M8.99181 4.06848V3.59399C8.99181 3.27726 8.86599 2.97351 8.64203 2.74956C8.41808 2.5256 8.11432 2.39978 7.7976 2.39978H6.20533C5.8886 2.39978 5.58485 2.5256 5.3609 2.74956C5.13694 2.97351 5.01112 3.27726 5.01112 3.59399V4.06848M8.99181 4.06848C7.66689 3.96609 6.33604 3.96609 5.01112 4.06848M7.00146 7.57467H7.00571V7.57892H7.00146V7.57467Z" stroke="#252525" stroke-width="0.849213" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    <div className="text-zinc-600 text-[10px]">
                        Avg. Package: 3.5 LPA
                    </div>
                </div>
            </div>
            <div className="text-primary text-center font-medium flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none" className="me-2">
                    <path d="M19.75 13.75V17.4167C19.75 17.9029 19.5568 18.3692 19.213 18.713C18.8692 19.0568 18.4029 19.25 17.9167 19.25H5.08333C4.5971 19.25 4.13079 19.0568 3.78697 18.713C3.44315 18.3692 3.25 17.9029 3.25 17.4167V13.75" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.91699 9.16669L11.5003 13.75L16.0837 9.16669" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.5 13.75V2.75" stroke="#02054D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Download Brochure
            </div>
            <div className="border-1 border-primary hover:bg-primary text-primary hover:text-white text-center font-medium p-2 rounded-[10px]">
                Get Free Counselling
            </div>
        </div>
        </>
    );
};

export default Elements;
