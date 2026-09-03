export type AssetType = 'instagram' | 'linkedin' | 'email';

export interface MarketingAsset {
  type: AssetType;
  label: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
}

export type GenerationStatus = 'idle' | 'generating' | 'done';
