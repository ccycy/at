package mapper;

import entity.Class;


import java.util.List;

public interface ClassMapper {


    int deleteByPrimaryKey(Integer id);

    int insert(Class record);

    int insertSelective(Class record);



    Class selectByPrimaryKey(Integer id);


    int updateByPrimaryKeySelective(Class record);

    int updateByPrimaryKey(Class record);
}