// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare var System: any;

declare interface MediaRecorderOptions {
    mimeType?: string;
    audioBitsPerSecond?: number;
    videoBitsPerSecond?: number;
    bitsPerSecond?: number;
}

// declare enum RecordingState {
//     "inactive",
//     "recording",
//     "paused"
// }

declare type RecordingState = 'inactive' | 'recording' | 'paused';

/**
 * `MediaRecorder` records a media stream
 */
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

  /**
   * Begins recording media; this method can optionally be passed a
   * timeslice argument with a value in milliseconds. If this is specified,
   * the media will be captured in separate chunks of that duration, rather
   * than the default behavior of recording the media in a single large chunk.
   * @param {string} timeslice This parameter takes a value of milliseconds,
   */
  start(timeslice?: number): void;

  /**
   * Stops recording, at which point a dataavailable event containing the
   * final Blob of saved data is fired. No more recording occurs
   */
  stop(): void;

  /**
   * Pauses the recording of media
   */
  pause(): void;

  /**
   * Resumes recording of media after having been paused
   */
  resume(): void;

  /**
   * Requests a Blob containing the saved data received thus far (or since
   * the last time requestData() was called. After calling this method,
   * recording continues, but in a new Blob.
   * and represents the length of media capture to return in each Blob. If it
   * is not specified, all media captured will be returned in a single Blob,
   * unless one or more calls are made to MediaRecorder.requestData
   */
  requestData(): void;

  /**
   * Returns a Boolean value indicating if the given MIME type is supported
   * by the current user agent
   * @param {DOMString} type the MIME type you want to know whether it is
   * supported or not
   */
  static isTypeSupported(type: string): boolean;
}