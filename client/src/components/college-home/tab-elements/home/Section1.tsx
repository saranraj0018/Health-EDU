import Infrastructure from "../../../../assets/college-home/tabs/home/Home tab pic.png";
import LadyImage from "../../../../assets/college-home/tabs/home/Home tab pic 2.png";

type Props = {
    CollegeName: string;
    Hp: string;
    Ap: string;
    Sp: string;
    Hfee: string;
}


const Section1 = ({CollegeName, Hp, Ap, Sp, Hfee}: Props) => {
    return (
        <>
            <section className="my-3 px-[8em]">
                <div className="grid grid-cols-10 gap-3">
                    <div className="col-span-10 md:col-span-3">
                        <img src={Infrastructure} alt="" className="h-full" />
                    </div>
                    <div className="col-span-10 md:col-span-5 bg-myCyan rounded-3xl p-4">
                        <div className="flex bg-[#5ab6c7] rounded-full p-1 text-white w-max">
                            <div className="bg-[#053338] rounded-full px-1 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4.25959 10.1469C3.98453 12.2525 3.82064 14.3711 3.76859 16.4939C6.64739 17.6964 9.40377 19.1732 11.9996 20.9039C14.5957 19.1732 17.3524 17.6964 20.2316 16.4939C20.1795 14.3711 20.0156 12.2525 19.7406 10.1469M19.7406 10.1469C20.6156 9.85292 21.5026 9.58092 22.3986 9.33292C19.1352 7.04517 15.6516 5.08881 11.9996 3.49292C8.34758 5.08914 4.86398 7.04584 1.60059 9.33392C2.49386 9.58055 3.38019 9.85165 4.25859 10.1469C6.92721 11.0441 9.51649 12.162 11.9996 13.4889C14.4823 12.162 17.0723 11.0441 19.7406 10.1469ZM6.74959 14.9999C6.9485 14.9999 7.13926 14.9209 7.27992 14.7802C7.42057 14.6396 7.49959 14.4488 7.49959 14.2499C7.49959 14.051 7.42057 13.8602 7.27992 13.7196C7.13926 13.5789 6.9485 13.4999 6.74959 13.4999C6.55067 13.4999 6.35991 13.5789 6.21926 13.7196C6.0786 13.8602 5.99959 14.051 5.99959 14.2499C5.99959 14.4488 6.0786 14.6396 6.21926 14.7802C6.35991 14.9209 6.55067 14.9999 6.74959 14.9999ZM6.74959 14.9999V11.3249C8.44632 10.2703 10.1989 9.30818 11.9996 8.44292M4.99259 19.9929C5.55056 19.4363 5.99302 18.7749 6.29455 18.0468C6.59608 17.3186 6.75072 16.538 6.74959 15.7499V14.2499" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <div className="mx-2 my-auto font-manrope font-medium">
                                {CollegeName}
                            </div>
                        </div>
                        <div className="grid grid-cols-10 my-3 gap-3">
                            <div className="col-span-10 md:col-span-5 p-2 flex space-x-3">
                                <div className="bg-[#ffffff78] border-1 border-white p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                        <path d="M25.4127 11.4311L24.5217 10.8583C24.4298 10.8 24.3185 10.7803 24.2122 10.8038C24.1059 10.8272 24.0132 10.8917 23.9543 10.9833C23.8954 11.0749 23.8751 11.186 23.8979 11.2925C23.9207 11.3989 23.9848 11.492 24.076 11.5514L24.9672 12.1243C25.0354 12.1705 25.0988 12.2235 25.1564 12.2824L15.694 18.3654L14.9819 17.9076C14.688 17.7228 14.3479 17.6247 14.0007 17.6247C13.6535 17.6246 13.3133 17.7226 13.0194 17.9074L12.3071 18.3653L2.84471 12.2824C2.90238 12.2235 2.96581 12.1705 3.03406 12.1243L3.7473 11.6657C3.7931 11.6365 3.8327 11.5987 3.86381 11.5542C3.89492 11.5097 3.91694 11.4595 3.9286 11.4065C3.94025 11.3535 3.94132 11.2987 3.93173 11.2452C3.92215 11.1918 3.9021 11.1408 3.87274 11.0951C3.84338 11.0495 3.80529 11.0101 3.76065 10.9792C3.71602 10.9483 3.66572 10.9265 3.61264 10.9151C3.55957 10.9038 3.50477 10.903 3.45139 10.9128C3.39801 10.9227 3.3471 10.943 3.30159 10.9726L2.58854 11.4311C2.29786 11.617 2.05878 11.8732 1.89343 12.1761C1.72808 12.4789 1.6418 12.8185 1.64258 13.1636V23.7982C1.64322 24.3442 1.86043 24.8677 2.24655 25.2538C2.63267 25.64 3.15618 25.8572 3.70224 25.8578H24.2988C24.8449 25.8572 25.3684 25.64 25.7545 25.2538C26.1406 24.8677 26.3579 24.3442 26.3585 23.7982V13.1636C26.3593 12.8186 26.273 12.4789 26.1077 12.1761C25.9424 11.8733 25.7034 11.6171 25.4127 11.4311ZM25.5178 13.0295C25.5259 13.0738 25.5315 13.1186 25.5346 13.1636V23.7982C25.5338 24.0632 25.447 24.3208 25.2873 24.5323L16.4558 18.855L25.5178 13.0295ZM2.7138 24.5323C2.55406 24.3208 2.46726 24.0632 2.46645 23.7982V13.1636C2.46956 13.1186 2.47518 13.0738 2.48327 13.0295L11.5453 18.855L2.7138 24.5323ZM3.70224 25.034C3.6311 25.033 3.56017 25.0258 3.49027 25.0125L13.4649 18.6003C13.6254 18.4993 13.8111 18.4458 14.0007 18.4458C14.1903 18.4458 14.376 18.4995 14.5364 18.6005L24.5108 25.0125C24.4409 25.0258 24.37 25.033 24.2988 25.034H3.70224ZM13.3607 9.84618C12.7783 9.52076 12.1012 9.40734 11.4445 9.52525C10.7879 9.64315 10.1925 9.98508 9.75972 10.4928C9.32695 11.0005 9.0836 11.6425 9.07114 12.3095C9.05868 12.9765 9.27788 13.6272 9.6914 14.1507C10.1049 14.6742 10.6872 15.0382 11.3389 15.1805C11.9907 15.3228 12.6716 15.2348 13.2657 14.9314C13.8598 14.6279 14.3304 14.1279 14.5971 13.5164C14.8639 12.9049 14.9104 12.2199 14.7287 11.578C14.6266 11.2131 14.4532 10.8722 14.2183 10.5749C13.9835 10.2776 13.692 10.0299 13.3607 9.84618ZM12.5149 14.345C12.1229 14.456 11.7068 14.4483 11.3192 14.3228C10.9316 14.1973 10.59 13.9596 10.3374 13.6399C10.0849 13.3203 9.93286 12.9329 9.90051 12.5267C9.86816 12.1206 9.95697 11.714 10.1557 11.3584C10.3544 11.0027 10.6542 10.714 11.017 10.5287C11.3799 10.3435 11.7895 10.2699 12.1941 10.3175C12.5987 10.365 12.9802 10.5315 13.2902 10.7958C13.6002 11.0601 13.8249 11.4104 13.9358 11.8025C14.0842 12.328 14.0179 12.891 13.7515 13.3677C13.485 13.8445 13.0403 14.196 12.5149 14.345ZM17.2031 15.7834L14.2238 5.2566C13.8209 5.28642 13.4182 5.19726 13.0656 5.0002C12.7129 4.80314 12.4259 4.50686 12.2402 4.14812L7.405 5.51667C7.43476 5.91952 7.34558 6.32225 7.14852 6.67488C6.95147 7.0275 6.65522 7.31452 6.29653 7.5003L8.08364 13.814C8.11341 13.9192 8.10019 14.0318 8.04689 14.1272C7.99359 14.2226 7.90458 14.293 7.79944 14.3227C7.69429 14.3525 7.58163 14.3393 7.48624 14.286C7.39084 14.2327 7.32052 14.1437 7.29076 14.0385L5.40267 7.36775C5.37294 7.26261 5.38618 7.14996 5.43948 7.05458C5.49277 6.95919 5.58176 6.88887 5.68688 6.85907C5.84305 6.81495 5.989 6.74048 6.11638 6.63993C6.24376 6.53937 6.35007 6.41469 6.42924 6.27302C6.50841 6.13135 6.55888 5.97547 6.57776 5.81428C6.59665 5.65309 6.58358 5.48977 6.5393 5.33363C6.50958 5.22849 6.52282 5.11585 6.57611 5.02046C6.6294 4.92508 6.71839 4.85476 6.82351 4.82496L12.3727 3.25426C12.4248 3.23953 12.4793 3.23521 12.533 3.24153C12.5868 3.24785 12.6387 3.2647 12.686 3.29111C12.7332 3.31752 12.7748 3.35298 12.8083 3.39545C12.8418 3.43793 12.8667 3.48659 12.8814 3.53867C12.9255 3.69484 13 3.84078 13.1006 3.96815C13.2011 4.09551 13.3258 4.20181 13.4675 4.28096C13.6092 4.36011 13.765 4.41056 13.9262 4.42942C14.0874 4.44828 14.2507 4.43519 14.4068 4.39089C14.512 4.36117 14.6246 4.37441 14.72 4.4277C14.8154 4.48099 14.8857 4.56998 14.9155 4.6751L17.9959 15.5589C18.0257 15.6641 18.0125 15.7767 17.9592 15.8721C17.9059 15.9675 17.8169 16.0378 17.7117 16.0676C17.6751 16.0779 17.6373 16.0832 17.5993 16.0833C17.5096 16.0832 17.4224 16.0538 17.3509 15.9997C17.2794 15.9456 17.2275 15.8697 17.2031 15.7834ZM3.36855 6.23091C3.2205 5.70532 3.28694 5.14246 3.55329 4.66578C3.81965 4.1891 4.26418 3.83751 4.7894 3.68812L13.5094 1.22015C13.9088 1.1082 14.3327 1.11949 14.7256 1.25253C15.1186 1.38557 15.4621 1.63417 15.7114 1.96577H21.0034C21.5494 1.96641 22.0729 2.18362 22.4591 2.56974C22.8452 2.95586 23.0624 3.47937 23.063 4.02543V12.4238C23.063 12.533 23.0196 12.6378 22.9424 12.7151C22.8651 12.7923 22.7604 12.8357 22.6511 12.8357C22.5419 12.8357 22.4371 12.7923 22.3598 12.7151C22.2826 12.6378 22.2392 12.533 22.2392 12.4238V4.02543C22.2388 3.69779 22.1085 3.38366 21.8768 3.15198C21.6451 2.92031 21.331 2.78999 21.0034 2.78963H16.0942L16.3274 3.6135H19.3556C19.4649 3.6135 19.5697 3.6569 19.6469 3.73415C19.7242 3.8114 19.7676 3.91618 19.7676 4.02543C19.7679 4.35307 19.8983 4.66719 20.1299 4.89887C20.3616 5.13055 20.6757 5.26087 21.0034 5.26122C21.1126 5.26122 21.2174 5.30462 21.2947 5.38188C21.3719 5.45913 21.4153 5.56391 21.4153 5.67316V13.483C21.4153 13.5922 21.3719 13.697 21.2947 13.7743C21.2174 13.8515 21.1126 13.8949 21.0034 13.8949C20.8941 13.8949 20.7894 13.8515 20.7121 13.7743C20.6348 13.697 20.5914 13.5922 20.5914 13.483V6.04365C20.196 5.96216 19.8332 5.76659 19.5477 5.48112C19.2622 5.19564 19.0666 4.83277 18.9852 4.43736H16.5606L19.4448 14.6276C19.4745 14.7328 19.4613 14.8454 19.408 14.9408C19.3547 15.0362 19.2657 15.1065 19.1605 15.1363C19.1239 15.1466 19.0861 15.1519 19.0481 15.152C18.9584 15.1519 18.8712 15.1226 18.7997 15.0685C18.7282 15.0143 18.6763 14.9384 18.6518 14.8521L15.2595 2.86546C15.17 2.55023 14.9591 2.28339 14.673 2.12356C14.387 1.96373 14.0492 1.92398 13.7338 2.01304L5.01387 4.48103C4.69872 4.57055 4.43197 4.78145 4.27216 5.06744C4.11235 5.35343 4.07253 5.69114 4.16144 6.00646L5.99019 12.4684C6.01996 12.5736 6.00674 12.6862 5.95344 12.7816C5.92705 12.8289 5.89161 12.8704 5.84916 12.904C5.8067 12.9375 5.75805 12.9624 5.70599 12.9771C5.60084 13.0069 5.48818 12.9937 5.39278 12.9404C5.29739 12.8871 5.22707 12.7981 5.1973 12.6929L3.36855 6.23091Z" fill="black"/>
                                    </svg>
                                </div>
                                <div className="my-auto">
                                    <h3 className="font-manrope font-medium text-md">
                                        Highest package
                                    </h3>
                                    <p className="font-manrope font-bold text-md">
                                        {Hp} LPA
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-10 md:col-span-5 p-2 flex space-x-3">
                                <div className="bg-[#ffffff78] border-1 border-white p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                        <path d="M25.4127 11.4311L24.5217 10.8583C24.4298 10.8 24.3185 10.7803 24.2122 10.8038C24.1059 10.8272 24.0132 10.8917 23.9543 10.9833C23.8954 11.0749 23.8751 11.186 23.8979 11.2925C23.9207 11.3989 23.9848 11.492 24.076 11.5514L24.9672 12.1243C25.0354 12.1705 25.0988 12.2235 25.1564 12.2824L15.694 18.3654L14.9819 17.9076C14.688 17.7228 14.3479 17.6247 14.0007 17.6247C13.6535 17.6246 13.3133 17.7226 13.0194 17.9074L12.3071 18.3653L2.84471 12.2824C2.90238 12.2235 2.96581 12.1705 3.03406 12.1243L3.7473 11.6657C3.7931 11.6365 3.8327 11.5987 3.86381 11.5542C3.89492 11.5097 3.91694 11.4595 3.9286 11.4065C3.94025 11.3535 3.94132 11.2987 3.93173 11.2452C3.92215 11.1918 3.9021 11.1408 3.87274 11.0951C3.84338 11.0495 3.80529 11.0101 3.76065 10.9792C3.71602 10.9483 3.66572 10.9265 3.61264 10.9151C3.55957 10.9038 3.50477 10.903 3.45139 10.9128C3.39801 10.9227 3.3471 10.943 3.30159 10.9726L2.58854 11.4311C2.29786 11.617 2.05878 11.8732 1.89343 12.1761C1.72808 12.4789 1.6418 12.8185 1.64258 13.1636V23.7982C1.64322 24.3442 1.86043 24.8677 2.24655 25.2538C2.63267 25.64 3.15618 25.8572 3.70224 25.8578H24.2988C24.8449 25.8572 25.3684 25.64 25.7545 25.2538C26.1406 24.8677 26.3579 24.3442 26.3585 23.7982V13.1636C26.3593 12.8186 26.273 12.4789 26.1077 12.1761C25.9424 11.8733 25.7034 11.6171 25.4127 11.4311ZM25.5178 13.0295C25.5259 13.0738 25.5315 13.1186 25.5346 13.1636V23.7982C25.5338 24.0632 25.447 24.3208 25.2873 24.5323L16.4558 18.855L25.5178 13.0295ZM2.7138 24.5323C2.55406 24.3208 2.46726 24.0632 2.46645 23.7982V13.1636C2.46956 13.1186 2.47518 13.0738 2.48327 13.0295L11.5453 18.855L2.7138 24.5323ZM3.70224 25.034C3.6311 25.033 3.56017 25.0258 3.49027 25.0125L13.4649 18.6003C13.6254 18.4993 13.8111 18.4458 14.0007 18.4458C14.1903 18.4458 14.376 18.4995 14.5364 18.6005L24.5108 25.0125C24.4409 25.0258 24.37 25.033 24.2988 25.034H3.70224ZM13.3607 9.84618C12.7783 9.52076 12.1012 9.40734 11.4445 9.52525C10.7879 9.64315 10.1925 9.98508 9.75972 10.4928C9.32695 11.0005 9.0836 11.6425 9.07114 12.3095C9.05868 12.9765 9.27788 13.6272 9.6914 14.1507C10.1049 14.6742 10.6872 15.0382 11.3389 15.1805C11.9907 15.3228 12.6716 15.2348 13.2657 14.9314C13.8598 14.6279 14.3304 14.1279 14.5971 13.5164C14.8639 12.9049 14.9104 12.2199 14.7287 11.578C14.6266 11.2131 14.4532 10.8722 14.2183 10.5749C13.9835 10.2776 13.692 10.0299 13.3607 9.84618ZM12.5149 14.345C12.1229 14.456 11.7068 14.4483 11.3192 14.3228C10.9316 14.1973 10.59 13.9596 10.3374 13.6399C10.0849 13.3203 9.93286 12.9329 9.90051 12.5267C9.86816 12.1206 9.95697 11.714 10.1557 11.3584C10.3544 11.0027 10.6542 10.714 11.017 10.5287C11.3799 10.3435 11.7895 10.2699 12.1941 10.3175C12.5987 10.365 12.9802 10.5315 13.2902 10.7958C13.6002 11.0601 13.8249 11.4104 13.9358 11.8025C14.0842 12.328 14.0179 12.891 13.7515 13.3677C13.485 13.8445 13.0403 14.196 12.5149 14.345ZM17.2031 15.7834L14.2238 5.2566C13.8209 5.28642 13.4182 5.19726 13.0656 5.0002C12.7129 4.80314 12.4259 4.50686 12.2402 4.14812L7.405 5.51667C7.43476 5.91952 7.34558 6.32225 7.14852 6.67488C6.95147 7.0275 6.65522 7.31452 6.29653 7.5003L8.08364 13.814C8.11341 13.9192 8.10019 14.0318 8.04689 14.1272C7.99359 14.2226 7.90458 14.293 7.79944 14.3227C7.69429 14.3525 7.58163 14.3393 7.48624 14.286C7.39084 14.2327 7.32052 14.1437 7.29076 14.0385L5.40267 7.36775C5.37294 7.26261 5.38618 7.14996 5.43948 7.05458C5.49277 6.95919 5.58176 6.88887 5.68688 6.85907C5.84305 6.81495 5.989 6.74048 6.11638 6.63993C6.24376 6.53937 6.35007 6.41469 6.42924 6.27302C6.50841 6.13135 6.55888 5.97547 6.57776 5.81428C6.59665 5.65309 6.58358 5.48977 6.5393 5.33363C6.50958 5.22849 6.52282 5.11585 6.57611 5.02046C6.6294 4.92508 6.71839 4.85476 6.82351 4.82496L12.3727 3.25426C12.4248 3.23953 12.4793 3.23521 12.533 3.24153C12.5868 3.24785 12.6387 3.2647 12.686 3.29111C12.7332 3.31752 12.7748 3.35298 12.8083 3.39545C12.8418 3.43793 12.8667 3.48659 12.8814 3.53867C12.9255 3.69484 13 3.84078 13.1006 3.96815C13.2011 4.09551 13.3258 4.20181 13.4675 4.28096C13.6092 4.36011 13.765 4.41056 13.9262 4.42942C14.0874 4.44828 14.2507 4.43519 14.4068 4.39089C14.512 4.36117 14.6246 4.37441 14.72 4.4277C14.8154 4.48099 14.8857 4.56998 14.9155 4.6751L17.9959 15.5589C18.0257 15.6641 18.0125 15.7767 17.9592 15.8721C17.9059 15.9675 17.8169 16.0378 17.7117 16.0676C17.6751 16.0779 17.6373 16.0832 17.5993 16.0833C17.5096 16.0832 17.4224 16.0538 17.3509 15.9997C17.2794 15.9456 17.2275 15.8697 17.2031 15.7834ZM3.36855 6.23091C3.2205 5.70532 3.28694 5.14246 3.55329 4.66578C3.81965 4.1891 4.26418 3.83751 4.7894 3.68812L13.5094 1.22015C13.9088 1.1082 14.3327 1.11949 14.7256 1.25253C15.1186 1.38557 15.4621 1.63417 15.7114 1.96577H21.0034C21.5494 1.96641 22.0729 2.18362 22.4591 2.56974C22.8452 2.95586 23.0624 3.47937 23.063 4.02543V12.4238C23.063 12.533 23.0196 12.6378 22.9424 12.7151C22.8651 12.7923 22.7604 12.8357 22.6511 12.8357C22.5419 12.8357 22.4371 12.7923 22.3598 12.7151C22.2826 12.6378 22.2392 12.533 22.2392 12.4238V4.02543C22.2388 3.69779 22.1085 3.38366 21.8768 3.15198C21.6451 2.92031 21.331 2.78999 21.0034 2.78963H16.0942L16.3274 3.6135H19.3556C19.4649 3.6135 19.5697 3.6569 19.6469 3.73415C19.7242 3.8114 19.7676 3.91618 19.7676 4.02543C19.7679 4.35307 19.8983 4.66719 20.1299 4.89887C20.3616 5.13055 20.6757 5.26087 21.0034 5.26122C21.1126 5.26122 21.2174 5.30462 21.2947 5.38188C21.3719 5.45913 21.4153 5.56391 21.4153 5.67316V13.483C21.4153 13.5922 21.3719 13.697 21.2947 13.7743C21.2174 13.8515 21.1126 13.8949 21.0034 13.8949C20.8941 13.8949 20.7894 13.8515 20.7121 13.7743C20.6348 13.697 20.5914 13.5922 20.5914 13.483V6.04365C20.196 5.96216 19.8332 5.76659 19.5477 5.48112C19.2622 5.19564 19.0666 4.83277 18.9852 4.43736H16.5606L19.4448 14.6276C19.4745 14.7328 19.4613 14.8454 19.408 14.9408C19.3547 15.0362 19.2657 15.1065 19.1605 15.1363C19.1239 15.1466 19.0861 15.1519 19.0481 15.152C18.9584 15.1519 18.8712 15.1226 18.7997 15.0685C18.7282 15.0143 18.6763 14.9384 18.6518 14.8521L15.2595 2.86546C15.17 2.55023 14.9591 2.28339 14.673 2.12356C14.387 1.96373 14.0492 1.92398 13.7338 2.01304L5.01387 4.48103C4.69872 4.57055 4.43197 4.78145 4.27216 5.06744C4.11235 5.35343 4.07253 5.69114 4.16144 6.00646L5.99019 12.4684C6.01996 12.5736 6.00674 12.6862 5.95344 12.7816C5.92705 12.8289 5.89161 12.8704 5.84916 12.904C5.8067 12.9375 5.75805 12.9624 5.70599 12.9771C5.60084 13.0069 5.48818 12.9937 5.39278 12.9404C5.29739 12.8871 5.22707 12.7981 5.1973 12.6929L3.36855 6.23091Z" fill="black"/>
                                    </svg>
                                </div>
                                <div className="my-auto">
                                    <h3 className="font-manrope font-medium text-md">
                                        Average package
                                    </h3>
                                    <p className="font-manrope font-bold text-md">
                                        {Ap} LPA
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-10 md:col-span-5 p-2 flex space-x-3">
                                <div className="bg-[#ffffff78] border-1 border-white p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                        <path d="M25.4127 11.4311L24.5217 10.8583C24.4298 10.8 24.3185 10.7803 24.2122 10.8038C24.1059 10.8272 24.0132 10.8917 23.9543 10.9833C23.8954 11.0749 23.8751 11.186 23.8979 11.2925C23.9207 11.3989 23.9848 11.492 24.076 11.5514L24.9672 12.1243C25.0354 12.1705 25.0988 12.2235 25.1564 12.2824L15.694 18.3654L14.9819 17.9076C14.688 17.7228 14.3479 17.6247 14.0007 17.6247C13.6535 17.6246 13.3133 17.7226 13.0194 17.9074L12.3071 18.3653L2.84471 12.2824C2.90238 12.2235 2.96581 12.1705 3.03406 12.1243L3.7473 11.6657C3.7931 11.6365 3.8327 11.5987 3.86381 11.5542C3.89492 11.5097 3.91694 11.4595 3.9286 11.4065C3.94025 11.3535 3.94132 11.2987 3.93173 11.2452C3.92215 11.1918 3.9021 11.1408 3.87274 11.0951C3.84338 11.0495 3.80529 11.0101 3.76065 10.9792C3.71602 10.9483 3.66572 10.9265 3.61264 10.9151C3.55957 10.9038 3.50477 10.903 3.45139 10.9128C3.39801 10.9227 3.3471 10.943 3.30159 10.9726L2.58854 11.4311C2.29786 11.617 2.05878 11.8732 1.89343 12.1761C1.72808 12.4789 1.6418 12.8185 1.64258 13.1636V23.7982C1.64322 24.3442 1.86043 24.8677 2.24655 25.2538C2.63267 25.64 3.15618 25.8572 3.70224 25.8578H24.2988C24.8449 25.8572 25.3684 25.64 25.7545 25.2538C26.1406 24.8677 26.3579 24.3442 26.3585 23.7982V13.1636C26.3593 12.8186 26.273 12.4789 26.1077 12.1761C25.9424 11.8733 25.7034 11.6171 25.4127 11.4311ZM25.5178 13.0295C25.5259 13.0738 25.5315 13.1186 25.5346 13.1636V23.7982C25.5338 24.0632 25.447 24.3208 25.2873 24.5323L16.4558 18.855L25.5178 13.0295ZM2.7138 24.5323C2.55406 24.3208 2.46726 24.0632 2.46645 23.7982V13.1636C2.46956 13.1186 2.47518 13.0738 2.48327 13.0295L11.5453 18.855L2.7138 24.5323ZM3.70224 25.034C3.6311 25.033 3.56017 25.0258 3.49027 25.0125L13.4649 18.6003C13.6254 18.4993 13.8111 18.4458 14.0007 18.4458C14.1903 18.4458 14.376 18.4995 14.5364 18.6005L24.5108 25.0125C24.4409 25.0258 24.37 25.033 24.2988 25.034H3.70224ZM13.3607 9.84618C12.7783 9.52076 12.1012 9.40734 11.4445 9.52525C10.7879 9.64315 10.1925 9.98508 9.75972 10.4928C9.32695 11.0005 9.0836 11.6425 9.07114 12.3095C9.05868 12.9765 9.27788 13.6272 9.6914 14.1507C10.1049 14.6742 10.6872 15.0382 11.3389 15.1805C11.9907 15.3228 12.6716 15.2348 13.2657 14.9314C13.8598 14.6279 14.3304 14.1279 14.5971 13.5164C14.8639 12.9049 14.9104 12.2199 14.7287 11.578C14.6266 11.2131 14.4532 10.8722 14.2183 10.5749C13.9835 10.2776 13.692 10.0299 13.3607 9.84618ZM12.5149 14.345C12.1229 14.456 11.7068 14.4483 11.3192 14.3228C10.9316 14.1973 10.59 13.9596 10.3374 13.6399C10.0849 13.3203 9.93286 12.9329 9.90051 12.5267C9.86816 12.1206 9.95697 11.714 10.1557 11.3584C10.3544 11.0027 10.6542 10.714 11.017 10.5287C11.3799 10.3435 11.7895 10.2699 12.1941 10.3175C12.5987 10.365 12.9802 10.5315 13.2902 10.7958C13.6002 11.0601 13.8249 11.4104 13.9358 11.8025C14.0842 12.328 14.0179 12.891 13.7515 13.3677C13.485 13.8445 13.0403 14.196 12.5149 14.345ZM17.2031 15.7834L14.2238 5.2566C13.8209 5.28642 13.4182 5.19726 13.0656 5.0002C12.7129 4.80314 12.4259 4.50686 12.2402 4.14812L7.405 5.51667C7.43476 5.91952 7.34558 6.32225 7.14852 6.67488C6.95147 7.0275 6.65522 7.31452 6.29653 7.5003L8.08364 13.814C8.11341 13.9192 8.10019 14.0318 8.04689 14.1272C7.99359 14.2226 7.90458 14.293 7.79944 14.3227C7.69429 14.3525 7.58163 14.3393 7.48624 14.286C7.39084 14.2327 7.32052 14.1437 7.29076 14.0385L5.40267 7.36775C5.37294 7.26261 5.38618 7.14996 5.43948 7.05458C5.49277 6.95919 5.58176 6.88887 5.68688 6.85907C5.84305 6.81495 5.989 6.74048 6.11638 6.63993C6.24376 6.53937 6.35007 6.41469 6.42924 6.27302C6.50841 6.13135 6.55888 5.97547 6.57776 5.81428C6.59665 5.65309 6.58358 5.48977 6.5393 5.33363C6.50958 5.22849 6.52282 5.11585 6.57611 5.02046C6.6294 4.92508 6.71839 4.85476 6.82351 4.82496L12.3727 3.25426C12.4248 3.23953 12.4793 3.23521 12.533 3.24153C12.5868 3.24785 12.6387 3.2647 12.686 3.29111C12.7332 3.31752 12.7748 3.35298 12.8083 3.39545C12.8418 3.43793 12.8667 3.48659 12.8814 3.53867C12.9255 3.69484 13 3.84078 13.1006 3.96815C13.2011 4.09551 13.3258 4.20181 13.4675 4.28096C13.6092 4.36011 13.765 4.41056 13.9262 4.42942C14.0874 4.44828 14.2507 4.43519 14.4068 4.39089C14.512 4.36117 14.6246 4.37441 14.72 4.4277C14.8154 4.48099 14.8857 4.56998 14.9155 4.6751L17.9959 15.5589C18.0257 15.6641 18.0125 15.7767 17.9592 15.8721C17.9059 15.9675 17.8169 16.0378 17.7117 16.0676C17.6751 16.0779 17.6373 16.0832 17.5993 16.0833C17.5096 16.0832 17.4224 16.0538 17.3509 15.9997C17.2794 15.9456 17.2275 15.8697 17.2031 15.7834ZM3.36855 6.23091C3.2205 5.70532 3.28694 5.14246 3.55329 4.66578C3.81965 4.1891 4.26418 3.83751 4.7894 3.68812L13.5094 1.22015C13.9088 1.1082 14.3327 1.11949 14.7256 1.25253C15.1186 1.38557 15.4621 1.63417 15.7114 1.96577H21.0034C21.5494 1.96641 22.0729 2.18362 22.4591 2.56974C22.8452 2.95586 23.0624 3.47937 23.063 4.02543V12.4238C23.063 12.533 23.0196 12.6378 22.9424 12.7151C22.8651 12.7923 22.7604 12.8357 22.6511 12.8357C22.5419 12.8357 22.4371 12.7923 22.3598 12.7151C22.2826 12.6378 22.2392 12.533 22.2392 12.4238V4.02543C22.2388 3.69779 22.1085 3.38366 21.8768 3.15198C21.6451 2.92031 21.331 2.78999 21.0034 2.78963H16.0942L16.3274 3.6135H19.3556C19.4649 3.6135 19.5697 3.6569 19.6469 3.73415C19.7242 3.8114 19.7676 3.91618 19.7676 4.02543C19.7679 4.35307 19.8983 4.66719 20.1299 4.89887C20.3616 5.13055 20.6757 5.26087 21.0034 5.26122C21.1126 5.26122 21.2174 5.30462 21.2947 5.38188C21.3719 5.45913 21.4153 5.56391 21.4153 5.67316V13.483C21.4153 13.5922 21.3719 13.697 21.2947 13.7743C21.2174 13.8515 21.1126 13.8949 21.0034 13.8949C20.8941 13.8949 20.7894 13.8515 20.7121 13.7743C20.6348 13.697 20.5914 13.5922 20.5914 13.483V6.04365C20.196 5.96216 19.8332 5.76659 19.5477 5.48112C19.2622 5.19564 19.0666 4.83277 18.9852 4.43736H16.5606L19.4448 14.6276C19.4745 14.7328 19.4613 14.8454 19.408 14.9408C19.3547 15.0362 19.2657 15.1065 19.1605 15.1363C19.1239 15.1466 19.0861 15.1519 19.0481 15.152C18.9584 15.1519 18.8712 15.1226 18.7997 15.0685C18.7282 15.0143 18.6763 14.9384 18.6518 14.8521L15.2595 2.86546C15.17 2.55023 14.9591 2.28339 14.673 2.12356C14.387 1.96373 14.0492 1.92398 13.7338 2.01304L5.01387 4.48103C4.69872 4.57055 4.43197 4.78145 4.27216 5.06744C4.11235 5.35343 4.07253 5.69114 4.16144 6.00646L5.99019 12.4684C6.01996 12.5736 6.00674 12.6862 5.95344 12.7816C5.92705 12.8289 5.89161 12.8704 5.84916 12.904C5.8067 12.9375 5.75805 12.9624 5.70599 12.9771C5.60084 13.0069 5.48818 12.9937 5.39278 12.9404C5.29739 12.8871 5.22707 12.7981 5.1973 12.6929L3.36855 6.23091Z" fill="black"/>
                                    </svg>
                                </div>
                                <div className="my-auto">
                                    <h3 className="font-manrope font-medium text-md">
                                        Students Placed
                                    </h3>
                                    <p className="font-manrope font-bold text-md">
                                        {Sp}
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-10 md:col-span-5 p-2 flex space-x-3">
                                <div className="bg-[#ffffff78] border-1 border-white p-3 rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                                        <path d="M25.4127 11.4311L24.5217 10.8583C24.4298 10.8 24.3185 10.7803 24.2122 10.8038C24.1059 10.8272 24.0132 10.8917 23.9543 10.9833C23.8954 11.0749 23.8751 11.186 23.8979 11.2925C23.9207 11.3989 23.9848 11.492 24.076 11.5514L24.9672 12.1243C25.0354 12.1705 25.0988 12.2235 25.1564 12.2824L15.694 18.3654L14.9819 17.9076C14.688 17.7228 14.3479 17.6247 14.0007 17.6247C13.6535 17.6246 13.3133 17.7226 13.0194 17.9074L12.3071 18.3653L2.84471 12.2824C2.90238 12.2235 2.96581 12.1705 3.03406 12.1243L3.7473 11.6657C3.7931 11.6365 3.8327 11.5987 3.86381 11.5542C3.89492 11.5097 3.91694 11.4595 3.9286 11.4065C3.94025 11.3535 3.94132 11.2987 3.93173 11.2452C3.92215 11.1918 3.9021 11.1408 3.87274 11.0951C3.84338 11.0495 3.80529 11.0101 3.76065 10.9792C3.71602 10.9483 3.66572 10.9265 3.61264 10.9151C3.55957 10.9038 3.50477 10.903 3.45139 10.9128C3.39801 10.9227 3.3471 10.943 3.30159 10.9726L2.58854 11.4311C2.29786 11.617 2.05878 11.8732 1.89343 12.1761C1.72808 12.4789 1.6418 12.8185 1.64258 13.1636V23.7982C1.64322 24.3442 1.86043 24.8677 2.24655 25.2538C2.63267 25.64 3.15618 25.8572 3.70224 25.8578H24.2988C24.8449 25.8572 25.3684 25.64 25.7545 25.2538C26.1406 24.8677 26.3579 24.3442 26.3585 23.7982V13.1636C26.3593 12.8186 26.273 12.4789 26.1077 12.1761C25.9424 11.8733 25.7034 11.6171 25.4127 11.4311ZM25.5178 13.0295C25.5259 13.0738 25.5315 13.1186 25.5346 13.1636V23.7982C25.5338 24.0632 25.447 24.3208 25.2873 24.5323L16.4558 18.855L25.5178 13.0295ZM2.7138 24.5323C2.55406 24.3208 2.46726 24.0632 2.46645 23.7982V13.1636C2.46956 13.1186 2.47518 13.0738 2.48327 13.0295L11.5453 18.855L2.7138 24.5323ZM3.70224 25.034C3.6311 25.033 3.56017 25.0258 3.49027 25.0125L13.4649 18.6003C13.6254 18.4993 13.8111 18.4458 14.0007 18.4458C14.1903 18.4458 14.376 18.4995 14.5364 18.6005L24.5108 25.0125C24.4409 25.0258 24.37 25.033 24.2988 25.034H3.70224ZM13.3607 9.84618C12.7783 9.52076 12.1012 9.40734 11.4445 9.52525C10.7879 9.64315 10.1925 9.98508 9.75972 10.4928C9.32695 11.0005 9.0836 11.6425 9.07114 12.3095C9.05868 12.9765 9.27788 13.6272 9.6914 14.1507C10.1049 14.6742 10.6872 15.0382 11.3389 15.1805C11.9907 15.3228 12.6716 15.2348 13.2657 14.9314C13.8598 14.6279 14.3304 14.1279 14.5971 13.5164C14.8639 12.9049 14.9104 12.2199 14.7287 11.578C14.6266 11.2131 14.4532 10.8722 14.2183 10.5749C13.9835 10.2776 13.692 10.0299 13.3607 9.84618ZM12.5149 14.345C12.1229 14.456 11.7068 14.4483 11.3192 14.3228C10.9316 14.1973 10.59 13.9596 10.3374 13.6399C10.0849 13.3203 9.93286 12.9329 9.90051 12.5267C9.86816 12.1206 9.95697 11.714 10.1557 11.3584C10.3544 11.0027 10.6542 10.714 11.017 10.5287C11.3799 10.3435 11.7895 10.2699 12.1941 10.3175C12.5987 10.365 12.9802 10.5315 13.2902 10.7958C13.6002 11.0601 13.8249 11.4104 13.9358 11.8025C14.0842 12.328 14.0179 12.891 13.7515 13.3677C13.485 13.8445 13.0403 14.196 12.5149 14.345ZM17.2031 15.7834L14.2238 5.2566C13.8209 5.28642 13.4182 5.19726 13.0656 5.0002C12.7129 4.80314 12.4259 4.50686 12.2402 4.14812L7.405 5.51667C7.43476 5.91952 7.34558 6.32225 7.14852 6.67488C6.95147 7.0275 6.65522 7.31452 6.29653 7.5003L8.08364 13.814C8.11341 13.9192 8.10019 14.0318 8.04689 14.1272C7.99359 14.2226 7.90458 14.293 7.79944 14.3227C7.69429 14.3525 7.58163 14.3393 7.48624 14.286C7.39084 14.2327 7.32052 14.1437 7.29076 14.0385L5.40267 7.36775C5.37294 7.26261 5.38618 7.14996 5.43948 7.05458C5.49277 6.95919 5.58176 6.88887 5.68688 6.85907C5.84305 6.81495 5.989 6.74048 6.11638 6.63993C6.24376 6.53937 6.35007 6.41469 6.42924 6.27302C6.50841 6.13135 6.55888 5.97547 6.57776 5.81428C6.59665 5.65309 6.58358 5.48977 6.5393 5.33363C6.50958 5.22849 6.52282 5.11585 6.57611 5.02046C6.6294 4.92508 6.71839 4.85476 6.82351 4.82496L12.3727 3.25426C12.4248 3.23953 12.4793 3.23521 12.533 3.24153C12.5868 3.24785 12.6387 3.2647 12.686 3.29111C12.7332 3.31752 12.7748 3.35298 12.8083 3.39545C12.8418 3.43793 12.8667 3.48659 12.8814 3.53867C12.9255 3.69484 13 3.84078 13.1006 3.96815C13.2011 4.09551 13.3258 4.20181 13.4675 4.28096C13.6092 4.36011 13.765 4.41056 13.9262 4.42942C14.0874 4.44828 14.2507 4.43519 14.4068 4.39089C14.512 4.36117 14.6246 4.37441 14.72 4.4277C14.8154 4.48099 14.8857 4.56998 14.9155 4.6751L17.9959 15.5589C18.0257 15.6641 18.0125 15.7767 17.9592 15.8721C17.9059 15.9675 17.8169 16.0378 17.7117 16.0676C17.6751 16.0779 17.6373 16.0832 17.5993 16.0833C17.5096 16.0832 17.4224 16.0538 17.3509 15.9997C17.2794 15.9456 17.2275 15.8697 17.2031 15.7834ZM3.36855 6.23091C3.2205 5.70532 3.28694 5.14246 3.55329 4.66578C3.81965 4.1891 4.26418 3.83751 4.7894 3.68812L13.5094 1.22015C13.9088 1.1082 14.3327 1.11949 14.7256 1.25253C15.1186 1.38557 15.4621 1.63417 15.7114 1.96577H21.0034C21.5494 1.96641 22.0729 2.18362 22.4591 2.56974C22.8452 2.95586 23.0624 3.47937 23.063 4.02543V12.4238C23.063 12.533 23.0196 12.6378 22.9424 12.7151C22.8651 12.7923 22.7604 12.8357 22.6511 12.8357C22.5419 12.8357 22.4371 12.7923 22.3598 12.7151C22.2826 12.6378 22.2392 12.533 22.2392 12.4238V4.02543C22.2388 3.69779 22.1085 3.38366 21.8768 3.15198C21.6451 2.92031 21.331 2.78999 21.0034 2.78963H16.0942L16.3274 3.6135H19.3556C19.4649 3.6135 19.5697 3.6569 19.6469 3.73415C19.7242 3.8114 19.7676 3.91618 19.7676 4.02543C19.7679 4.35307 19.8983 4.66719 20.1299 4.89887C20.3616 5.13055 20.6757 5.26087 21.0034 5.26122C21.1126 5.26122 21.2174 5.30462 21.2947 5.38188C21.3719 5.45913 21.4153 5.56391 21.4153 5.67316V13.483C21.4153 13.5922 21.3719 13.697 21.2947 13.7743C21.2174 13.8515 21.1126 13.8949 21.0034 13.8949C20.8941 13.8949 20.7894 13.8515 20.7121 13.7743C20.6348 13.697 20.5914 13.5922 20.5914 13.483V6.04365C20.196 5.96216 19.8332 5.76659 19.5477 5.48112C19.2622 5.19564 19.0666 4.83277 18.9852 4.43736H16.5606L19.4448 14.6276C19.4745 14.7328 19.4613 14.8454 19.408 14.9408C19.3547 15.0362 19.2657 15.1065 19.1605 15.1363C19.1239 15.1466 19.0861 15.1519 19.0481 15.152C18.9584 15.1519 18.8712 15.1226 18.7997 15.0685C18.7282 15.0143 18.6763 14.9384 18.6518 14.8521L15.2595 2.86546C15.17 2.55023 14.9591 2.28339 14.673 2.12356C14.387 1.96373 14.0492 1.92398 13.7338 2.01304L5.01387 4.48103C4.69872 4.57055 4.43197 4.78145 4.27216 5.06744C4.11235 5.35343 4.07253 5.69114 4.16144 6.00646L5.99019 12.4684C6.01996 12.5736 6.00674 12.6862 5.95344 12.7816C5.92705 12.8289 5.89161 12.8704 5.84916 12.904C5.8067 12.9375 5.75805 12.9624 5.70599 12.9771C5.60084 13.0069 5.48818 12.9937 5.39278 12.9404C5.29739 12.8871 5.22707 12.7981 5.1973 12.6929L3.36855 6.23091Z" fill="black"/>
                                    </svg>
                                </div>
                                <div className="my-auto">
                                    <h3 className="font-manrope font-medium text-md">
                                        Hostel Fees
                                    </h3>
                                    <p className="font-manrope font-bold text-md">
                                        {Hfee}
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="col-span-10 md:col-span-2">
                        <img src={LadyImage} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1
