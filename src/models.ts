export type SpotubeAlbumType = "Album" | "Single" | "Compilation";

export interface SpotubeSimpleAlbumObject {
  typeName: "album_simple";
  id: string;
  name: string;
  externalUri: string;
  artists: SpotubeSimpleArtistObject[];
  images: SpotubeImageObject[];
  albumType: SpotubeAlbumType;
  releaseDate: string | null;
}

export interface SpotubeFullAlbumObject {
  typeName: "album_full";
  id: string;
  name: string;
  artists: SpotubeSimpleArtistObject[];
  images: SpotubeImageObject[];
  releaseDate: string;
  externalUri: string;
  totalTracks: number;
  albumType: SpotubeAlbumType;
  recordLabel: string | null;
  genres: string[] | null;
}

export interface SpotubeSimpleArtistObject {
  typeName: "artist_simple";
  id: string;
  name: string;
  externalUri: string;
  images: SpotubeImageObject[] | null;
}

export interface SpotubeFullArtistObject {
  typeName: "artist_full";
  id: string;
  name: string;
  externalUri: string;
  images: SpotubeImageObject[];
  genres: string[] | null;
  followers: number | null;
}

export type SpotubeMediaCompressionType = "lossy" | "lossless";

export interface SpotubeAudioLossyContainerQuality {
  bitrate: number;
}

export interface SpotubeAudioLosslessContainerQuality {
  bitDepth: number;
  sampleRate: number;
}

export type SpotubeAudioSourceContainerPreset =
  | {
      type: "lossy";
      data: {
        type: SpotubeMediaCompressionType;
        name: string;
        qualities: SpotubeAudioLossyContainerQuality[];
      };
    }
  | {
      type: "lossless";
      data: {
        type: SpotubeMediaCompressionType;
        name: string;
        qualities: SpotubeAudioLosslessContainerQuality[];
      };
    };

export interface SpotubeAudioSourceMatchObject {
  typeName: "audio_source_match";
  id: string;
  title: string;
  artists: string[];
  duration: number;
  thumbnail: string | null;
  externalUri: string;
}
export interface SpotubeAudioSourceStreamObject {
  typeName: "audio_source_stream";
  url: string;
  container: string;
  type: SpotubeMediaCompressionType;
  codec: string | null;
  bitrate: number | null;
  bitDepth: number | null;
  sampleRate: number | null;
}

export interface SpotubeBrowseSectionObject {
  typeName: "browse_section";
  id: string;
  title: string;
  externalUri: string;
  browseMore: boolean;
  items: (SpotubeTrackObject | SpotubeSimplePlaylistObject | SpotubeSimpleAlbumObject | SpotubeSimpleAlbumObject)[];
}

export type PluginApi = "webview" | "localstorage" | "timezone";

export type PluginAbility =
  | "authentication"
  | "scrobbling"
  | "metadata"
  | "audio-source";

export interface PluginConfiguration {
  name: string;
  description: string;
  version: string;
  author: string;
  entryPoint: string;
  pluginApiVersion: string;
  apis: PluginApi[];
  abilities: PluginAbility[];
  repository: string | null;
}

export interface PluginUpdateAvailable {
  downloadUrl: string;
  version: string;
  changelog: string | null;
}

export interface ScrobbleArtist {
  id: string;
  name: string;
}

export interface ScrobbleAlbum {
  id: string;
  name: string;
}

export interface ScrobbleDetails {
  id: string;
  title: string;
  artists: ScrobbleArtist[];
  album: ScrobbleAlbum;
  timestamp: number | null;
  durationMs: number | null;
  isrc: string | null;
}

export interface SpotubeImageObject {
  typeName: "image";
  url: string;
  width: number | null;
  height: number | null;
}

export interface SpotubePaginationResponseObject<
  T extends { typeName: string }
> {
  limit: number;
  nextOffset: number | null;
  total: number;
  hasMore: boolean;
  items: T[];
}

export interface SpotubeSimplePlaylistObject {
  typeName: "playlist_simple";
  id: string;
  name: string;
  description: string;
  externalUri: string;
  owner: SpotubeUserObject;
  images: SpotubeImageObject[];
}

export interface SpotubeFullPlaylistObject {
  typeName: "playlist_full";
  id: string;
  name: string;
  description: string;
  externalUri: string;
  owner: SpotubeUserObject;
  images: SpotubeImageObject[];
  collaborators: SpotubeUserObject[];
  collaborative: boolean;
  public: boolean;
}

export interface SpotubeSearchResponseObject {
  typeName: "search_response";
  albums: SpotubeSimpleAlbumObject[];
  artists: SpotubeFullArtistObject[];
  playlists: SpotubeSimplePlaylistObject[];
  tracks: SpotubeTrackObject[];
}

export interface SpotubeTrackObject {
  typeName: "track";
  id: string;
  name: string;
  externalUri: string;
  artists: SpotubeSimpleArtistObject[];
  album: SpotubeSimpleAlbumObject;
  durationMs: number;
  isrc: string;
  explicit: boolean;
}

export interface SpotubeUserObject {
  typeName: "user";
  id: string;
  name: string;
  images: SpotubeImageObject[];
  externalUri: string;
}
