import React from 'react';

export default function TrackInfoModal({ isOpen, onClose, data }) {
    if (!isOpen) return null;

    return (
        <div className='track-modal-overlay' onClick={onClose}>
            <div className='track-modal-content' onClick={(e) => e.stopPropagation()}>
                <div className="modal-heading">
                    <h2>{data?.title}</h2>
                </div>
                <div className="main-modal-content">
                    <div>
                        <h2>{data?.artist}</h2>
                        <p>{data?.role}</p>
                    </div>

                    <div>
                        <h2>{data?.sample}</h2>
                        <p>Song Samples</p>
                    </div>

                    <div>
                        <h2>{data?.feature}</h2>
                        <p>{data?.featureRole}</p>
                    </div>
                    <div className="disclaimer">
                        <p>This track is provided as a free artistic work and is not offered for sale. Some tracks may contain uncleared samples from copyrighted recordings. No infringement is intended, and all rights to sampled material remain with their original owners.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}