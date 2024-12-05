// Copyright 2023 The Perses Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { TextField } from '@mui/material';
import { OptionsEditorControl } from '@perses-dev/components';

export interface MetricLabelInputProps {
  value?: string;
  onChange: (metricLabel?: string) => void;
}

export function MetricLabelInput({ value, onChange }: MetricLabelInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue ? stringToRegExp(newValue) : undefined);
  };

  return (
    <OptionsEditorControl
      label="Metric label"
      description="Specify the metric label to display its corresponding value in the chart"
      control={
        <TextField fullWidth name="Metric label" value={value ? regExpToString(value) : ''} onChange={handleChange} />
      }
    />
  );
}

// Helper functions
function stringToRegExp(pattern?: string): string | undefined {
  if (!pattern) {
    return undefined;
  }
  const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
  return new RegExp(`^${escapedPattern}$`).source;
}

function regExpToString(regex?: string): string {
  if (!regex) {
    return '';
  }
  // Remove the start (^) and end ($) anchors if they exist
  return regex.replace(/^\^/, '').replace(/\$$/, '');
}
