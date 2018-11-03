package entity;

public class Hour {
    private Integer hourId;

    private String hourName;

    private String hourUrl;

    private Integer unitId;

    public Integer getHourId() {
        return hourId;
    }

    public void setHourId(Integer hourId) {
        this.hourId = hourId;
    }

    public String getHourName() {
        return hourName;
    }

    public void setHourName(String hourName) {
        this.hourName = hourName == null ? null : hourName.trim();
    }

    public String getHourUrl() {
        return hourUrl;
    }

    public void setHourUrl(String hourUrl) {
        this.hourUrl = hourUrl == null ? null : hourUrl.trim();
    }

    public Integer getUnitId() {
        return unitId;
    }

    public void setUnitId(Integer unitId) {
        this.unitId = unitId;
    }
}