package mapper;

import entity.Unit;


import java.util.List;

public interface UnitMapper {


    int deleteByPrimaryKey(Integer unitId);

    int insert(Unit record);

    int insertSelective(Unit record);



    Unit selectByPrimaryKey(Integer unitId);



    int updateByPrimaryKeySelective(Unit record);

    int updateByPrimaryKey(Unit record);
}