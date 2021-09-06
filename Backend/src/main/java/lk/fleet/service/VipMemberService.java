package lk.fleet.service;

import lk.fleet.dto.VehicleDTO;
import lk.fleet.dto.VipMemberDTO;
import lk.fleet.entity.Vehicle;
import lk.fleet.entity.VipMember;

import java.util.List;

public interface VipMemberService {

    VipMemberDTO addVipmember(VipMember vipMember);

    VipMemberDTO addVipMember(VipMember vipMember);

    VipMemberDTO updateVipMember(String vipMemberId, VipMember vipMember);


    List<VipMemberDTO> getAllVipMembers();



}
