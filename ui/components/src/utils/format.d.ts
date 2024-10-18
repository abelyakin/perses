// Copyright 2024 The Perses Authors
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

export declare function dateFormatOptionsWithTimeZone(dateFormatOptions: Intl.DateTimeFormatOptions, timeZone?: string): Intl.DateTimeFormatOptions;
export declare function formatWithTimeZone(date: Date, formatString: string, timeZone?: string): string;
export declare function getFormattedDate(value: number, rangeMs: number, timeZone?: string): string;
export declare function getFormattedAxisLabel(rangeMs: number): "{yyyy}" | "{MMM} {yyyy}" | "{MM}/{dd}" | "{MM}/{dd} {HH}:{mm}" | {
    year: string;
    month: string;
    day: string;
};
//# sourceMappingURL=format.d.ts.map
