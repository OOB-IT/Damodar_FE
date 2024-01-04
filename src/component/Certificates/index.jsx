import React from 'react';
import { gcci, msme, uaadhar } from '../../assets/certificates/index'
import { CertificateTitle, CertificateCard, CertificateContainer, CertificateImg, CertificateWrapper } from './CertificateElements';

const Certificates = () => {
    return (
        <>
            <CertificateTitle><h2>Membership & Certification</h2></CertificateTitle>
            <CertificateContainer id='certificates'>
                <CertificateWrapper>
                    <CertificateCard>
                        <CertificateImg src={gcci} />
                    </CertificateCard>
                    <CertificateCard>
                        <CertificateImg src={msme} />
                    </CertificateCard>
                    <CertificateCard>
                        <CertificateImg src={uaadhar} />
                    </CertificateCard>
                </CertificateWrapper>
            </CertificateContainer>
        </>

    )
}

export default Certificates;