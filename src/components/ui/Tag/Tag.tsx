import { TagContainer, TagProps } from "./TagStyles"


export const Tag = ({ color, size, children }: TagProps) => {
  return (
    <TagContainer color={color} size={size}>
      {children}
    </TagContainer>
  )
}
