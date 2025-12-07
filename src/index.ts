export * from "./models.js";
export * from "./apis.js";

import type {
  PluginConfiguration,
  PluginUpdateAvailable,
  ScrobbleDetails,
  SpotubeAudioSourceContainerPreset,
  SpotubeAudioSourceMatchObject,
  SpotubeAudioSourceStreamObject,
  SpotubeBrowseSectionObject,
  SpotubeFullAlbumObject,
  SpotubeFullArtistObject,
  SpotubeFullPlaylistObject,
  SpotubePaginationResponseObject,
  SpotubeSearchResponseObject,
  SpotubeTrackObject,
  SpotubeUserObject,
} from "./models.js";

export interface IArtistEndpoint {
  getArtist(id: string): Promise<SpotubeFullArtistObject>;
  topTracks(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>>;
  albums(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>>;
  related(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>>;
  save(ids: string[]): Promise<void>;
  unsave(ids: string[]): Promise<void>;
}

export interface IAlbumEndpoint {
  getAlbum(id: string): Promise<SpotubeFullAlbumObject>;
  tracks(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>>;
  releases(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>>;
  save(ids: string[]): Promise<void>;
  unsave(ids: string[]): Promise<void>;
}

export interface IAudioSourceEndpoint {
  supportedPresets(): SpotubeAudioSourceContainerPreset[];
  matches(track: SpotubeTrackObject): Promise<SpotubeAudioSourceMatchObject[]>;
  streams(
    matched: SpotubeAudioSourceMatchObject
  ): Promise<SpotubeAudioSourceStreamObject[]>;
}

export interface IAuthEndpoint {
  authenticate(): Promise<void>;
  logout(): Promise<void>;
  isAuthenticated(): Promise<boolean>;
}

export interface IBrowseEndpoint {
  sections(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeBrowseSectionObject>>;
  sectionItems<T extends { typeName: string }>(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<T>>;
}

export interface ICoreEndpoint {
  checkUpdate(
    pluginConfig: PluginConfiguration
  ): Promise<PluginUpdateAvailable | null>;
  support(): string;
  scrobble(details: ScrobbleDetails): Promise<void>;
}

export interface IPlaylistEndpoint {
  getPlaylist(id: string): Promise<SpotubeFullPlaylistObject>;
  tracks(
    id: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>>;
  createPlaylist(
    userId: string,
    name: string,
    description?: string,
    public_?: boolean,
    collaborative?: boolean
  ): Promise<SpotubeFullPlaylistObject | null>;
  updatePlaylist(
    playlistId: string,
    name?: string,
    description?: string,
    public_?: boolean,
    collaborative?: boolean
  ): Promise<void>;
  deletePlaylist(playlistId: string): Promise<void>;
  addTracks(
    playlistId: string,
    trackIds: string[],
    position?: number
  ): Promise<void>;
  removeTracks(playlistId: string, trackIds: string[]): Promise<void>;
  save(playlistId: string): Promise<void>;
  unsave(playlistId: string): Promise<void>;
}

export interface ISearchEndpoint {
  chips(): string[];
  all(query: string): Promise<SpotubeSearchResponseObject>;
  tracks(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>>;
  albums(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>>;
  artists(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>>;
  playlists(
    query: string,
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullPlaylistObject>>;
}

export interface ITrackEndpoint {
  getTrack(id: string): Promise<SpotubeTrackObject>;
  save(ids: string[]): Promise<void>;
  unsave(ids: string[]): Promise<void>;
  radio(id: string): Promise<SpotubeTrackObject[]>;
}

export interface IUserEndpoint {
  me(): Promise<SpotubeUserObject>;
  savedTracks(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeTrackObject>>;
  savedAlbums(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullAlbumObject>>;
  savedArtists(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullArtistObject>>;
  savedPlaylists(
    offset?: number,
    limit?: number
  ): Promise<SpotubePaginationResponseObject<SpotubeFullPlaylistObject>>;
}

export interface IPlugin {
  artist: IArtistEndpoint;
  album: IAlbumEndpoint;
  audioSource: IAudioSourceEndpoint;
  auth: IAuthEndpoint;
  browse: IBrowseEndpoint;
  core: ICoreEndpoint;
  playlist: IPlaylistEndpoint;
  search: ISearchEndpoint;
  track: ITrackEndpoint;
  user: IUserEndpoint;
}
