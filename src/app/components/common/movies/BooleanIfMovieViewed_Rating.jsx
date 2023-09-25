import { Box, Rating, Tooltip } from "@mui/material";
// ICONS
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { LiaEyeSolid, LiaEyeSlash } from "react-icons/lia";
import { dataRatingLabels } from "../../../utils/assets/data";
const colorIcon = "#ce1957";
const sizeIcon = 30;

export default function BooleanIfMovieViewed_Rating({ rating, favorite, watch }) {

  return (
    <div>
      {watch ? (
        <Tooltip title='Vu'>
          <span>
            <LiaEyeSolid size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas vu'>
          <span>
            <LiaEyeSlash size={sizeIcon} />
          </span>
        </Tooltip>
      )}
      {/* FAVORIS */}
      {favorite ? (
        <Tooltip title='En favori'>
          <span>
            <AiFillHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      ) : (
        <Tooltip title='Pas en favori'>
          <span>
            <AiOutlineHeart color={colorIcon} size={sizeIcon} />
          </span>
        </Tooltip>
      )}
      <Rating
        name='half-rating-read'
        defaultValue={rating}
        precision={0.5}
        readOnly
        size='large'
      />
      {rating !== null && <Box sx={{ ml: 2 }}>{dataRatingLabels[rating]}</Box>}
    </div>
  );
}
