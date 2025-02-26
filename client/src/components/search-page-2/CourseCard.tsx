const CourseCard = ({YearlyFees,TotalFees,Duration,Eligiblity}) => {
  return (
    <>
    <div className="bg-white rounded-2xl p-3 space-y-2 mb-4">
        <h2 className="text-primary font-manrope font-semibold border-s-2 border-primary ps-1">
            B.Pharma
        </h2>
        <p className="text-primary font-manrope text-[11px] font-medium">
            Application Date: 21 Aug - 27 Aug 2024
        </p>

        <div className="flex text-[#505171] text-[13px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" className="me-1 my-auto">
                <path d="M9.71762 5.71972H6.05754M9.71762 7.54976H6.05754M7.88758 11.2098L6.05754 9.3798H6.97256C7.45792 9.3798 7.92339 9.18699 8.26659 8.84379C8.60979 8.50059 8.8026 8.03512 8.8026 7.54976C8.8026 7.0644 8.60979 6.59892 8.26659 6.25573C7.92339 5.91253 7.45792 5.71972 6.97256 5.71972M13.3777 8.00727C13.3777 8.72824 13.2357 9.44215 12.9598 10.1082C12.6839 10.7743 12.2795 11.3796 11.7697 11.8894C11.2599 12.3992 10.6546 12.8036 9.98856 13.0795C9.32246 13.3554 8.60855 13.4974 7.88758 13.4974C7.16661 13.4974 6.45269 13.3554 5.7866 13.0795C5.12051 12.8036 4.51528 12.3992 4.00548 11.8894C3.49567 11.3796 3.09128 10.7743 2.81537 10.1082C2.53947 9.44215 2.39746 8.72824 2.39746 8.00727C2.39746 6.5512 2.97588 5.15477 4.00548 4.12517C5.03508 3.09557 6.43151 2.51715 7.88758 2.51715C9.34365 2.51715 10.7401 3.09557 11.7697 4.12517C12.7993 5.15477 13.3777 6.5512 13.3777 8.00727Z" stroke="#02054D" stroke-width="0.732016" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Yearly Fee : <span className="text-primary ms-1"> {YearlyFees}</span>
        </div>
        <div className="flex text-[#505171] text-[13px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" className="me-1 my-auto">
                <path d="M9.71762 5.71972H6.05754M9.71762 7.54976H6.05754M7.88758 11.2098L6.05754 9.3798H6.97256C7.45792 9.3798 7.92339 9.18699 8.26659 8.84379C8.60979 8.50059 8.8026 8.03512 8.8026 7.54976C8.8026 7.0644 8.60979 6.59892 8.26659 6.25573C7.92339 5.91253 7.45792 5.71972 6.97256 5.71972M13.3777 8.00727C13.3777 8.72824 13.2357 9.44215 12.9598 10.1082C12.6839 10.7743 12.2795 11.3796 11.7697 11.8894C11.2599 12.3992 10.6546 12.8036 9.98856 13.0795C9.32246 13.3554 8.60855 13.4974 7.88758 13.4974C7.16661 13.4974 6.45269 13.3554 5.7866 13.0795C5.12051 12.8036 4.51528 12.3992 4.00548 11.8894C3.49567 11.3796 3.09128 10.7743 2.81537 10.1082C2.53947 9.44215 2.39746 8.72824 2.39746 8.00727C2.39746 6.5512 2.97588 5.15477 4.00548 4.12517C5.03508 3.09557 6.43151 2.51715 7.88758 2.51715C9.34365 2.51715 10.7401 3.09557 11.7697 4.12517C12.7993 5.15477 13.3777 6.5512 13.3777 8.00727Z" stroke="#02054D" stroke-width="0.732016" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Total Fees : <span className="text-primary ms-1"> {TotalFees} </span>
        </div>
        <div className="flex text-[#505171] text-[13px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="20" viewBox="0 0 24 15" fill="none">
                <path d="M7.88758 2.15033C4.85658 2.15033 2.39746 4.60944 2.39746 7.64045C2.39746 10.6714 4.85658 13.1306 7.88758 13.1306C10.9186 13.1306 13.3777 10.6714 13.3777 7.64045C13.3777 4.60944 10.9186 2.15033 7.88758 2.15033Z" stroke="#02054D" stroke-width="0.732016" stroke-miterlimit="10"/>
                <path d="M7.88867 3.98041V8.098H10.6337" stroke="#02054D" stroke-width="0.732016" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Duration: <span className="text-primary ms-1"> {Duration} </span>
        </div>
        <div className="flex text-[#505171] text-[13px] font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 15" fill="none" className="my-auto me-1">
                <g clip-path="url(#clip0_4974_3304)">
                    <path d="M1.17773 5.44377L7.58958 2.88171L14.0014 5.44377L7.58958 8.00582L1.17773 5.44377Z" stroke="#02054D" stroke-width="0.732016" stroke-linejoin="round"/>
                    <path d="M14.0008 5.47711V8.29019M4.0918 6.79321V10.5881C4.0918 10.5881 5.55888 12.0317 7.589 12.0317C9.61943 12.0317 11.0865 10.5881 11.0865 10.5881V6.79321" stroke="#02054D" stroke-width="0.732016" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_4974_3304">
                    <rect width="14.6403" height="14.6403" fill="white" transform="translate(0.568359 0.136658)"/>
                    </clipPath>
                </defs>
            </svg>
            Eligiblity: <span className="text-primary ms-1"> {Eligiblity} </span>
        </div>
        <button className="text-white bg-[#444FFF] rounded-full px-2 py-1 w-full">
            Apply Now
        </button>
    </div>
      
    </>
  )
}

export default CourseCard
