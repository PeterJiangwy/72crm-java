package com.kakarote.crm9.erp.admin.entity.base;

import com.jfinal.plugin.activerecord.Model;
import com.jfinal.plugin.activerecord.IBean;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseAdminSceneDefault<M extends BaseAdminSceneDefault<M>> extends Model<M> implements IBean {

	public BaseAdminSceneDefault setDefaultId(java.lang.Integer defaultId) {
		set("default_id", defaultId);
		return this;
	}
	
	public java.lang.Integer getDefaultId() {
		return getInt("default_id");
	}

	public BaseAdminSceneDefault setType(java.lang.Integer type) {
		set("type", type);
		return this;
	}
	
	public java.lang.Integer getType() {
		return getInt("type");
	}

	public BaseAdminSceneDefault setUserId(java.lang.Long userId) {
		set("user_id", userId);
		return this;
	}
	
	public java.lang.Long getUserId() {
		return getLong("user_id");
	}

	public BaseAdminSceneDefault setSceneId(java.lang.Integer sceneId) {
		set("scene_id", sceneId);
		return this;
	}
	
	public java.lang.Integer getSceneId() {
		return getInt("scene_id");
	}

}
