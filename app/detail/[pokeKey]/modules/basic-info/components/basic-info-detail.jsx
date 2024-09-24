import React from 'react';
import useBasicInfoDetail from '../hooks/useBasicInfoDetail';
import useGenera from '../hooks/useGenera';
import useWeight from '../hooks/useWeight';
import useHeight from '../hooks/useHeight';
import useCaptureRate from '../hooks/useCaptuerRate';
import useGrowthRate from '../hooks/useGrowthRate';

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

function GrowthRate({ growthRate }) {
  const {
    subject,
    expPointAtLevel50,
    expPointAtLevel100,
    growthRate: pokeGrowthRate,
  } = useGrowthRate(growthRate);

  return (
    <div className="info-container">
      <div className="info-subject">
        {subject}
      </div>
      <div className="info-content grid gap-y-0.5">
        <div className="capitalize">
          {pokeGrowthRate}
        </div>
        <div className="flex gap-x-2">
          <span className="text-slate-500/90 text-sm">
            {expPointAtLevel50.text}
          </span>
          :
          <span>{expPointAtLevel50.content}</span>
        </div>
        <div className="flex gap-x-2">
          <span className="text-slate-500/90 text-sm">
            {expPointAtLevel100.text}
          </span>
          :
          <span>{expPointAtLevel100.content}</span>
        </div>
      </div>
    </div>
  );
}

export default function BasicInfoDetail({ basicInfo, weight, height }) {
  const {
    genera,
    captureRate,
    growthRate,
  } = basicInfo;

  const { title } = useBasicInfoDetail();

  return (
    <div>
      <div className="info-title">
        {title}
      </div>
      <Genera genera={genera} />
      <Height height={height} />
      <Weight weight={weight} />
      <CaptureRate captureRate={captureRate} />
      <GrowthRate growthRate={growthRate} />
    </div>
  );
}
