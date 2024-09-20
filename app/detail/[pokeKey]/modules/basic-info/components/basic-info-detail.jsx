import React from 'react';
import useGenera from '../hooks/useGenera';
import useWeight from '../hooks/useWeight';
import useHeight from '../hooks/useHeight';
import useCaptureRate from '../hooks/useCaptuerRate';

function Genera({ genera }) {
  const {
    subject,
    genera: pokeGenera,
  } = useGenera(genera);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content">
        {pokeGenera}
      </div>
    </div>
  );
}

function Height({ height }) {
  const {
    subject,
    height: pokeHeight,
  } = useHeight(height);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content">
        {pokeHeight}
      </div>
    </div>
  );
}

function Weight({ weight }) {
  const {
    subject,
    weight: pokeWeight,
  } = useWeight(weight);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content">
        {pokeWeight}
      </div>
    </div>
  );
}

function CaptureRate({ captureRate }) {
  const {
    subject,
    captureRate: pokeCaptureRate,
  } = useCaptureRate(captureRate);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content">
        {pokeCaptureRate}
      </div>
    </div>
  );
}

function GrowhRate({ growhRate }) {

}

export default function BasicInfoDetail({ basicInfo }) {
  const {
    genera,
    height = 100,
    weight = 100,
    captureRate,
  } = basicInfo;
  return (
    <div>
      <div className="info-title">title</div>
      <Genera genera={genera} />
      <Height height={height} />
      <Weight weight={weight} />
      <CaptureRate captureRate={captureRate} />
    </div>
  );
}
