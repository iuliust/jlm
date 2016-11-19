// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;

declare interface MediaRecorderOptions {
    mimeType?: string;
    audioBitsPerSecond?: number;
    videoBitsPerSecond?: number;
    bitsPerSecond?: number;
}

declare enum RecordingState {
    "inactive",
    "recording",
    "paused"
}

declare class MediaRecorder extends EventTarget {
  constructor(stream: MediaStream, options?: MediaRecorderOptions);
  readonly stream: MediaStream;
  readonly mimeType: string;
  readonly state: RecordingState;
  onstart();
  onstop();
  ondataavailable();
  onpause();
  onresume();
  onerror();
  ignoreMutedMedia: boolean;
  readonly videoBitsPerSecond: number;
  readonly audioBitsPerSecond: number;
  start(timeslice?: number): void;
  stop(): void;
  pause(): void;
  resume(): void;
  requestData(): void;
  static isTypeSupported(string): boolean;
}