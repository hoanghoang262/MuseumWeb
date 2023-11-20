import { Carousel } from "react-responsive-carousel";
import HomeImages from "../../Data/HomeImages";
import MuseumIcon from "@mui/icons-material/Museum";
import { useTranslation } from "react-i18next";
import presenImg from "../../Images/presentImage.jpg";
import { presenData } from "../../Data/presenData";
import IntroImg from "../../Images/IntroImg.jpg";
import { useRecoilValue } from "recoil";
import { defaultLanguageState } from "../../recoil/atoms/recoils";

export const Introduce = () => {
  const { t } = useTranslation();
  const defaultLanguage = useRecoilValue(defaultLanguageState);

  return (
    <div>
      {/*ANCHOR - image slider */}
      <Carousel
        autoPlay={true}
        dynamicHeight={true}
        infiniteLoop={true}
        emulateTouch={true}
      >
        {HomeImages.map((image) => (
          <div>
            <img src={image} className="w-full" />
          </div>
        ))}
      </Carousel>
      {/*ANCHOR - Big Icon */}
      <div className="text-center mt-32 mx-20">
        <MuseumIcon style={{ fontSize: "900%" }} className="text-green-900" />
        <div className="text-3xl font-serif">{t("Tham Quan")}</div>
      </div>
      {/*ANCHOR - Introduce info */}
      <div className="mx-20">
        <div className="flex">
          <img className="w-7/12" src={presenImg} />
          <div className="w-5/12 flex flex-col">
            {presenData.map((data) => (
              <>
                <div className="h-1/3 p-10 flex items-center">
                  <data.icon
                    style={{ fontSize: "600%", marginRight: "10px" }}
                  />
                  <div>
                    <div className="font-light text-3xl mb-5">
                      {t(`${data.label}`)}
                    </div>
                    <div className="text-neutral-400 font-medium">
                      {t(`${data.content}`)}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-20 mb-3 text-4xl font-serif text-green-800">
          {t("Bảo tàng Dân tộc học Việt Nam")}
        </div>
        <div className="flex items-center">
          <div className="w-2/3 whitespace-pre-line font-light text-lg">
            {defaultLanguage === "vn" ? (
              <>
                Ngày 12 tháng 11 năm 1997, tại Hà Nội diễn ra một sự kiện quan
                trọng: Phó Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam
                Nguyễn Thị Bình và Tổng thống Cộng hòa Pháp Jacques Chirac cắt
                băng khai trương Bảo tàng Dân tộc học Việt Nam. Từ tòa Trống
                đồng giới thiệu 54 dân tộc Việt Nam, Bảo tàng Dân tộc học Việt
                Nam đã từng bước hoàn thiện khu Vườn Kiến trúc với 10 công trình
                dân gian đại diện cho các loại hình khác nhau của nhiều dân tộc
                và vùng văn hóa. Không dừng lại ở giới thiệu về Việt Nam, Bảo
                tàng xây dựng tòa Cánh diều, trưng bày kết nối với các tộc người
                ở Đông Nam Á. Và xa hơn thế, các trưng bày vươn ra châu Á, châu
                Đại Dương, châu Phi và Mỹ Latin, nhờ những sưu tập hiện vật được
                hiến tặng. Trải qua hành trình hơn 20 năm, cùng với các trưng
                bày thường xuyên là hàng loạt trưng bày nhất thời, những hoạt
                động trình diễn văn hóa phi vật thể, các chương trình hoạt động
                giáo dục trải nghiệm… đã làm cho Bảo tàng Dân tộc học Việt Nam
                sống động và trở thành một điểm sáng, một điểm tham quan thu hút
                đông đảo du khách trong nước và quốc tế, được công chúng mến mộ.
                Trong ba năm liền (2012, 2013, 2014), Bảo tàng Dân tộc học Việt
                Nam được TripAdvisor, trang web du lịch nổi tiếng thế giới, bình
                chọn là Bảo tàng xuất sắc, xếp thứ tư trong 25 bảo tàng hấp dẫn
                nhất châu Á. Ba năm tiếp theo (2015, 2016, 2017), Bảo tàng Dân
                tộc học Việt Nam được vinh danh là Điểm tham quan du lịch hàng
                đầu Việt Nam, do Bộ Văn hóa, Thể thao và Du lịch, Tổng cục Du
                lịch và Hiệp hội Du lịch Việt Nam trao tặng. Thậm chí, ngay
                trong thời kỳ dịch bệnh Covid-19 ảnh hưởng nặng nề đến Việt Nam
                và các nước trên thế giới (2020-2021), Bảo tàng Dân tộc học Việt
                Nam vẫn không ngừng sáng tạo để đưa đến cho công chúng những sản
                phẩm văn hóa đa dạng, đặc sắc và thích ứng linh hoạt với nhu cầu
                thay đổi của xã hội, cũng như tình hình “bình thường mới”. Bảo
                tàng Dân tộc học Việt Nam đã vinh hạnh và tự hào khi là bảo tàng
                duy nhất ở Việt Nam được Bộ Văn hóa, Thể thao và Du lịch trao
                tặng Bằng khen vì đã có thành tích xuất sắc trong xây dựng và tổ
                chức hoạt động du lịch tại địa phương năm 2021. Để đạt được các
                kết quả đó, trong suốt quá trình hình thành và phát triển, đội
                ngũ nhân viên của Bảo tàng Dân tộc học Việt Nam luôn hướng theo
                các quan niệm, tiếp cận phương thức hoạt động mới. Bảo tàng Dân
                tộc học Việt Nam cũng luôn nhận được sự hỗ trợ có hiệu quả của
                nhiều chuyên gia, tổ chức trong nước và quốc tế. Quá trình làm
                việc không mệt mỏi ấy là quá trình cán bộ, nhân viên Bảo tàng
                tích lũy kiến thức và những trải nghiệm chuyên nghiệp quý báu.
              </>
            ) : (
              <>
                On November 12, 1997, an important event took place in Hanoi
                Official: Vice President of the Socialist Republic of Vietnam
                Nguyen Thi Binh and President of the French Republic Jacques
                Chirac cut the ribbon Vietnam Museum of Ethnology. Introduction
                from the Bronze Drum court 54 Vietnamese ethnic groups, the
                Vietnam Museum of Ethnology has gradually completed Complete the
                Architectural Garden with 10 folk works representing the
                different types of many ethnic groups and cultural regions.
                Don't stop Introducing Vietnam again, the Kite Building Museum
                is on display show connection with ethnic groups in Southeast
                Asia. And beyond that, the displays expanding to Asia, Oceania,
                Africa and Latin America, thanks to the Collection of donated
                artifacts. After a journey of more than 20 years, Along with the
                regular displays comes a series of the largest displays time,
                intangible cultural performance activities, chapters
                experiential educational activities... done for the Museum of
                Ethnology Vietnamese learning is alive and becomes a bright
                spot, a reference point The attraction attracts a large number
                of domestic and international tourists and is recognized they
                admire. For three consecutive years (2012, 2013, 2014), Museum
                of Ethnology Studying Vietnam is recognized by TripAdvisor, the
                world-famous travel website, Voted Excellent Museum, ranked
                fourth among 25 attractive museums most in Asia. The next three
                years (2015, 2016, 2017), Museum of Ethnology Vietnam Academy
                was honored as Vietnam's Top Tourist Attraction Nam, by the
                Ministry of Culture, Sports and Tourism, General Department of
                Tourism and Hiep Awarded by Vietnam Tourism Association. Even
                during the epidemic Covid-19 disease severely affects Vietnam
                and countries around the world world (2020-2021), the Vietnam
                Museum of Ethnology continues to shine brightly created to bring
                to the public diverse and unique cultural products identity and
                adapt flexibly to the changing needs of society, as well as "new
                normal" situation. Vietnam Museum of Ethnology was honored happy
                and proud to be the only museum in Vietnam recognized by the
                Ministry of Culture, Sports and Tourism awarded Certificates of
                Merit for outstanding achievements in building and organizing
                local tourism activities in 2021. To achieve those results,
                throughout the formation and development process development,
                the staff of the Vietnam Museum of Ethnology towards new
                concepts and approaches to operating methods. Tell The Vietnam
                Museum of Ethnology also always receives effective support of
                many domestic and international experts and organizations.
                Making process That tireless work is the process of Museum staff
                and employees Accumulate knowledge and valuable professional
                experiences.
              </>
            )}
          </div>
          <img src={IntroImg} className="w-1/3 ml-5" />
        </div>
      </div>
    </div>
  );
};
