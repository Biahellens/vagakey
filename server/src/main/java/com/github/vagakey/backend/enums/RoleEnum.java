package com.github.vagakey.backend.enums;

public enum RoleEnum {
    ADM("ADM"),
    USR("USR");

    private String role;

    RoleEnum(String role){
        this.role = role;
    }

    public String getRole(){
        return role;
    }
}
