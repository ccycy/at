package mapper;

import entity.Hour;


import java.util.List;

public interface HourMapper {


    int deleteByPrimaryKey(Integer hourId);

    int insert(Hour record);

    int insertSelective(Hour record);



    Hour selectByPrimaryKey(Integer hourId);





    int updateByPrimaryKeySelective(Hour record);

    int updateByPrimaryKey(Hour record);
}