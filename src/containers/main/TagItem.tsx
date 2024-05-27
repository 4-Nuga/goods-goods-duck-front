import { Tag } from '@/types/ComingSoonAndRankType'

export default function TagItem({ tag }: { tag: Tag }) {
  return <p className="pr-[3px] text-[14px] text-[#808080]">#{tag.tagName}</p>
}