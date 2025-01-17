"use client"
import React from 'react'
import Link from 'next/link'
import './terms.css'
import { useRouter } from 'next/navigation'


export default function page() {
    const router = useRouter();

    const back = () => {
        router.push('../');
    }

    return (
          <div className='termspage'>
            {/* <Link href='./' id='terms-home'></Link> */}
            <div className='terms-sub-one'>
                <p> <button onClick={back} >Home</button>&#62; Terms & Conditions</p>
                <h1>Terms of use<span>.</span></h1>
            </div>
            <div className='terms-table'>
                <div className='terms-table-sec1'>
                    <div className='terms-table-item1'>
                        <h3>Acceptance of Terms</h3>
                        <p>By accessing this website, you agree to be bound by these terms and conditions of use.</p>
                    </div>
                    <div className='terms-table-item2'>
                        <h3>Limitation of Liability</h3>
                        <p>We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website</p>
                    </div>
                </div>
                <div className='terms-table-sec2'>
                    <div className='terms-table-item3'>
                        <h3>Use of Information</h3>
                        <p>The information provided on this website is for general informational purposes only and should not be construed as professional advice. We recommend consulting with a licensed insurance agent or financial advisor regarding specific insurance needs.</p>
                    </div>
                    <div className='terms-table-item4'>
                        <h3>Accuracy of Information</h3>
                        <p>We strive to ensure the accuracy and timeliness of information presented on this website. However, we make no warranties or representations regarding the accuracy, completeness, or reliability of any information provided.</p>
                    </div>
                </div>
                <div className='terms-table-sec3'>
                    <div className='terms-table-item5'>
                        <h3>Privacy Policy</h3>
                        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information.</p>
                    </div>
                    <div className='terms-table-item6'>
                        <h3>Intellectual Property</h3>
                        <p>All content, logos, and trademarks displayed on this website are the property of their respective owners and may not be used without prior written permission.</p>
                    </div>
                </div>
                <div className='terms-table-sec4'>
                    <div className='terms-table-item7'>
                        <h3>Third-Party Links</h3>
                        <p>This website may contain links to third-party websites for your convenience. We do not endorse or control the content of these websites and are not responsible for any information or services provided by them.</p>
                    </div>
                    <div className='terms-table-item8'>
                        <h3>Changes to Terms</h3>
                        <p>We reserve the right to modify or update these terms and conditions at any time without prior notice. Your continued use of the website after such changes constitutes acceptance of the updated terms</p>
                    </div>
                </div>

            </div>
            
          </div>

    )
}
